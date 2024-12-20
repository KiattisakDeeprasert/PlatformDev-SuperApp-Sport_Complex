import { PaymentSpecial } from "@/utils/PaymentSpecialTypes";
import { BsTrashFill } from "react-icons/bs";
import { LiaPenFancySolid } from "react-icons/lia";

interface PaymentSpecialTableProps {
  payments: PaymentSpecial[];
  onEdit: (payment: PaymentSpecial) => void;
  onDelete: (paymentId: string) => void;
}

const getStatusClass = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "completed":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "cancelled":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  }
};

export default function PaymentSpecialTable({
  payments,
  onEdit,
  onDelete,
}: PaymentSpecialTableProps) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-6 py-3 text-center">Username</th>
            <th className="px-6 py-3 text-center">Field Name (EN)</th>
            <th className="px-6 py-3 text-center">Price</th>
            <th className="px-6 py-3 text-center">Status</th>
            <th className="px-6 py-3 text-center">Payment Image</th>
            <th className="px-6 py-3 text-center">Date/Time</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {payments.map((payment) => (
            <tr key={payment.id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 text-center">
                {payment.reservation?.user?.username || "No Username"}
              </td>
              <td className="px-6 py-4 text-center">
                {payment.reservation?.field?.name.en || "No Data"}
              </td>
              <td className="px-6 py-4 text-center">
                {payment.reservation?.field?.price || "No Price"}
              </td>
              <td className="px-6 py-4 text-center">
                <span
                  className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getStatusClass(
                    payment.status
                  )}`}
                >
                  {payment.status.charAt(0).toUpperCase() +
                    payment.status.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4 text-center flex items-center justify-center">
                {payment.paymentImage ? (
                  <img
                    src={payment.paymentImage}
                    alt="Payment Image"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                ) : (
                  <span className="text-gray-500">No Image</span>
                )}
              </td>
              <td className="px-6 py-4 text-center">
                {new Date(payment.dateTime).toLocaleString()}
              </td>
              <td className="px-6 py-4 text-center justify-center">
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => onEdit(payment)}
                    className="bg-white text-black px-2 py-2 rounded-full border border-gray"
                  >
                    <LiaPenFancySolid className="size-5" />
                  </button>
                  <button
                    onClick={() => onDelete(payment.id)}
                    className="bg-black text-white px-2 py-2 rounded-full border border-gray"
                  >
                    <BsTrashFill className="size-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
