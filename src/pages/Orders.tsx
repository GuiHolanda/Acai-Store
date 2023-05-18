import { useState } from "react";
import {
  dateResults,
  modificationsDate,
  orders,
  positionEvolution,
  salesOrders,
} from "../context/ordens-2022";

export const Orders = () => {
  console.log(dateResults);
  const [selectedDate, setSelectedDate] = useState("01/01/2022");

  function dateChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    const newDate = event.currentTarget.value;

    setSelectedDate(newDate);
  }

  return (
    <div className="flex flex-col gap-10 mx-auto  py-12">
      <div>
        <label
          htmlFor="positionDate"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Data da posição
        </label>
        <select
          name="positionDate"
          id="positionDate"
          value={selectedDate}
          onChange={dateChangeHandler}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5"
        >
          <option value={"01/01/2022"}>01/01/2022</option>
          {modificationsDate.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>

      <table className="w-fit">
        <thead>
          <tr className="border-b-4 ">
            {Object.keys(positionEvolution[0].position[0]).map((key) => (
              <th key={key} className="px-6 py-3 text-left">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {positionEvolution
            .find((position) => position.positionDate === selectedDate)
            ?.position?.map((position) => (
              <tr key={`${position.ativo}_${position.quantidade}`} className="">
                <td className="px-6 py-3 border-b">{position.ativo}</td>
                <td className="px-6 py-3 border-b">{position.quantidade}</td>
                <td className="px-6 py-3 border-b">
                  {position.valor.toLocaleString("pt-BR")}
                </td>
                <td className="px-6 py-3 border-b">
                  {position.preço.toLocaleString()}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <h3 className="text-xl border-b py-4">Ganhos e Perdas</h3>
      <div className="flex gap-10">
        <div className="max-h-[520px] w-fit overflow-auto">
          <table>
            <thead className="sticky top-0 bg-white border-b-4">
              <tr>
                {Object.keys(salesOrders[0]).map((key) => (
                  <th key={key} className="px-6 py-3 text-left">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {salesOrders
                .filter((order) => order.date === selectedDate)
                .map((order) => (
                  <tr key={`${order.date}_${order.asset}_${order.quantity}`}>
                    <td className="px-6 py-3 border-b">{order.date}</td>
                    <td className="px-6 py-3 border-b">{order.type}</td>
                    <td className="px-6 py-3 border-b">{order.asset}</td>
                    <td className="px-6 py-3 border-b">{order.quantity}</td>
                    <td className="px-6 py-3 border-b">
                      {order.value.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td className="px-6 py-3 border-b">
                      {order.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td className="px-6 py-3 border-b">
                      {order.buyPrice?.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td
                      className={`px-6 py-3 border-b ${
                        order.profitOrLoss > 0
                          ? "text-green-800"
                          : "text-red-600"
                      } font-semibold`}
                    >
                      {order.profitOrLoss.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="max-h-[520px] w-fit overflow-auto">
          <table>
            <thead className="sticky top-0 bg-white border-b-4">
              <tr>
                {Object.keys(dateResults[0]).map((key) => (
                  <th key={key} className="px-6 py-3 text-left">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dateResults.map((order) => (
                <tr key={`${order.date}_${order.dateResult}`}>
                  <td className="px-6 py-3 border-b">{order.date}</td>
                  <td
                    className={`px-6 py-3 border-b ${
                      order.dateResult > 0 ? "text-green-800" : "text-red-600"
                    } font-semibold`}
                  >
                    {order.dateResult.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="text-xl border-b py-4">Histórico de Ordens</h3>
      <div className="max-h-[520px] w-fit overflow-auto">
        <table>
          <thead className="sticky top-0 bg-white border-b-4">
            <tr>
              {Object.keys(orders.orders[0]).map((key) => (
                <th key={key} className="px-6 py-3 text-left">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.orders.map((order) => (
              <tr key={`${order.date}_${order.asset}_${order.quantity}`}>
                <td className="px-6 py-3 border-b">{order.date}</td>
                <td className="px-6 py-3 border-b">{order.type}</td>
                <td className="px-6 py-3 border-b">{order.asset}</td>
                <td className="px-6 py-3 border-b">{order.quantity}</td>
                <td className="px-6 py-3 border-b">{order.price}</td>
                <td className="px-6 py-3 border-b">{order.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
