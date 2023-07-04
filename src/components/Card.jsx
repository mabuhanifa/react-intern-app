/* eslint-disable react/prop-types */
export default function Card({ item }) {
  return (
    <div>
      <div className="p-10 border border-gray-300">
        <h1 className="text-2xl font-bold">{item.Name}</h1>
        <p className="text-lg">Price: Rs. {item.Price}</p>
        <h1 className="text-2xl font-[500]">Item Id : {item.id}</h1>
      </div>
    </div>
  );
}
