import React, { useState, useEffect, useRef } from 'react';

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const observer = useRef();

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.example.com/items?page=${page}`);
      const data = await response.json();
      setItems((prevItems) => [...prevItems, ...data]); // Append new items
      setPage((prevPage) => prevPage + 1); // Increment page
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(); // Fetch initial items
  }, []);

  const lastItemRef = (node) => {
    if (loading) return; // Prevent loading when fetching
    if (observer.current) observer.current.disconnect(); // Disconnect the previous observer

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchItems(); // Fetch more items when near the bottom
      }
    });

    if (node) observer.current.observe(node); // Observe the last item
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => {
          if (items.length === index + 1) {
            return <li ref={lastItemRef} key={item.id}>{item.name}</li>; // Last item gets the ref
          } else {
            return <li key={item.id}>{item.name}</li>;
          }
        })}
      </ul>
      {loading && <p>Loading...</p>} {/* Loading indicator */}
    </div>
  );
};

export default InfiniteScrollList;
