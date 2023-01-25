import React from 'react';
import { useSelector } from 'react-redux';

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((acc, car) => acc + car.cost, 0)
  );
  return (
    <div className="car-value">
      <p>Total Cost: ${totalCost}</p>
    </div>
  );
}

export default CarValue;
