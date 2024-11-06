import { useState } from "react";

function CarList() {
    const [cars, setCars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("");
    const [carModel, setModel] = useState("");

    function handleAddCar() {
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};
        setCars(c => [...c, newCar]);
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    function deleteCar(index) {
        setCars(cars.filter((_, i) => i !== index))
    }

    function handleCarYear(event) {
        setYear(event.target.value);
    }

    function handleCarMake(event) {
        setMake(event.target.value);
    }

    function handleCarModel(event) {
        setModel(event.target.value);
    }

    return (
        <>
        <h2>List of Cars</h2>
        <ul>
            {cars.map((car, index) => 
            <li key={index}>{car.year} {car.make} {car.model}<button onClick={() => deleteCar(index)}>Delete</button></li>)}
        </ul>
        <input type="number" value={carYear} onChange={handleCarYear} /><br />
        <input type="text" value={carMake} onChange={handleCarMake} placeholder="Enter Car Make"/><br />
        <input type="text" value={carModel} onChange={handleCarModel} placeholder="Enter Car Model"/><br />
        <button type="submit" onClick={handleAddCar}>Add Car</button>
        </>
    )

}

export default CarList