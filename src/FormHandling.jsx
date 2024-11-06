export default function FormHandling() {
    // 1. Managing State with a Single useState Hook:
    // Using a single useState to manage form data as an object is efficient. Here’s an example of how you might implement it:
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        agree: false,
      });
      
      // Handle input changes
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };

    //   2. Validating Form Inputs
    const validateForm = () => {
        const errors = {};
        if (!formData.name) {
          errors.name = "Name is required";
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = "Email is invalid";
        }
        if (formData.age && (isNaN(formData.age) || formData.age < 0)) {
          errors.age = "Age must be a positive number";
        }
        return errors;
      };

    //   3. Submitting the Form:
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
          // Handle errors (e.g., display them)
          return;
        }
        
        try {
          const response = await fetch('https://api.example.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          // Handle response
        } catch (error) {
          console.error('Error submitting form:', error);
        }
    };  
      
}