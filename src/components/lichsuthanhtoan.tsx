const PaymentSummaryTable = () => {
  return (
    <div className="max-w-full mx-auto">
      <div className="rounded-md overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cột trái - 2 bảng nhỏ */}
          <div className="lg:col-span-1 space-y-6">
            {/* Bảng 1: Cần thanh toán chi phí */}
            <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-900/30">
              <h2 className="bg-blue-900/30 text-center font-bold text-lg p-3 border-b border-gray-700 text-slate-300">
                Cần thanh toán chi phí
              </h2>
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-gray-900 text-gray-300">
                    <th className="border border-gray-700 p-3 font-semibold">Tháng</th>
                    <th className="border border-gray-700 p-3 font-semibold">Số tiền</th>
                  </tr>
                </thead>
                <tbody className="bg-black/50">
                  <tr className="hover:bg-gray-900/50 transition-colors">
                    <td className="border border-gray-700 p-3 text-center text-slate-300">8-9</td>
                    <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$85,000</td>
                  </tr>
                  <tr className="hover:bg-gray-900/50 transition-colors">
                    <td className="border border-gray-700 p-3 text-center text-slate-300">10</td>
                    <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$54,000</td>
                  </tr>
                  <tr className="hover:bg-gray-900/50 transition-colors">
                    <td className="border border-gray-700 p-3 text-center text-slate-300">11</td>
                    <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$30,300</td>
                  </tr>
                  <tr className="hover:bg-gray-900/50 transition-colors">
                    <td className="border border-gray-700 p-3 text-center text-slate-300">12</td>
                    <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$4,000</td>
                  </tr>
                  <tr className="bg-yellow-900/30 font-bold">
                    <td className="border border-gray-700 p-3 text-center text-[#F9D649]">Tổng</td>
                    <td className="border border-gray-700 p-3 text-right text-[#F9D649] text-xl font-bold">$173,300</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bảng 2: Chưa thanh toán */}
            <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-900/30">
              <h2 className="bg-red-900/30 text-center font-bold text-lg p-3 border-b border-gray-700 text-slate-300">
                Chưa thanh toán
              </h2>
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-gray-900 text-gray-300">
                    <th className="border border-gray-700 p-3 font-semibold">Tháng</th>
                    <th className="border border-gray-700 p-3 font-semibold">Số tiền</th>
                  </tr>
                </thead>
                <tbody className="bg-black/50">
                  <tr className="hover:bg-gray-900/50 transition-colors">
                    <td className="border border-gray-700 p-3 text-center text-slate-300">8-9</td>
                    <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$51,800</td>
                  </tr>
                  <tr className="hover:bg-gray-900/50 transition-colors">
                    <td className="border border-gray-700 p-3 text-center text-slate-300">10</td>
                    <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$17,200</td>
                  </tr>
                  <tr className="hover:bg-gray-900/50 transition-colors">
                    <td className="border border-gray-700 p-3 text-center text-slate-300">11</td>
                    <td className="border border-gray-700 p-3 text-right text-red-400 text-lg font-semibold">-$17,700</td>
                  </tr>
                  <tr className="hover:bg-gray-900/50 transition-colors">
                    <td className="border border-gray-700 p-3 text-center text-slate-300">12</td>
                    <td className="border border-gray-700 p-3 text-right text-red-400 text-lg font-semibold">-$12,500</td>
                  </tr>
                  <tr className="bg-yellow-900/30 font-bold">
                    <td className="border border-gray-700 p-3 text-center text-[#F9D649]">Tổng</td>
                    <td className="border border-gray-700 p-3 text-right text-[#F9D649] text-xl font-bold">$39,300</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Cột phải - Bảng lớn */}
          <div className="lg:col-span-2">
            <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-900/30">
              <h2 className="bg-green-900/30 text-center font-bold text-lg p-3 border-b border-gray-700 text-slate-300">
                Đã thanh toán
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-base">
                  <thead>
                    <tr className="bg-gray-900 text-gray-300">
                      <th className="border border-gray-700 p-3 font-semibold">Ngày</th>
                      <th className="border border-gray-700 p-3 font-semibold">Người chi trả</th>
                      <th className="border border-gray-700 p-3 font-semibold">Số tiền</th>
                    </tr>
                  </thead>
                  <tbody className="bg-black/50">
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">18/8</td>
                      <td className="border border-gray-700 p-3 bg-yellow-900/30 text-yellow-400">A Việt</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$10,000</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">25/8</td>
                      <td className="border border-gray-700 p-3 bg-red-900/30 text-red-400">A Vũ</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$4,000</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">10/9</td>
                      <td className="border border-gray-700 p-3 bg-red-900/30 text-red-400">A Vũ</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$8,000</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">14/9</td>
                      <td className="border border-gray-700 p-3 bg-red-900/30 text-red-400">A Vũ</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$1,200</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">18/9</td>
                      <td className="border border-gray-700 p-3 bg-yellow-900/30 text-yellow-400">A Việt</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$7,000</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">26/9</td>
                      <td className="border border-gray-700 p-3 bg-yellow-900/30 text-yellow-400">A Việt</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$3,000</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">6/10</td>
                      <td className="border border-gray-700 p-3 bg-yellow-900/30 text-yellow-400">A Việt</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$3,000</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">9/10</td>
                      <td className="border border-gray-700 p-3 bg-yellow-900/30 text-yellow-400">A Việt</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$2,000</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">9/10</td>
                      <td className="border border-gray-700 p-3 bg-red-900/30 text-red-400">A Vũ</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$3,800</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">11/10</td>
                      <td className="border border-gray-700 p-3 bg-red-900/30 text-red-400">A Vũ</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$9,500</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">12/10</td>
                      <td className="border border-gray-700 p-3 bg-red-900/30 text-red-400">A Vũ</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$9,500</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">28/10</td>
                      <td className="border border-gray-700 p-3 bg-red-900/30 text-red-400">A Vũ</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$4,000</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">29/10</td>
                      <td className="border border-gray-700 p-3 bg-red-900/30 text-red-400">A Vũ</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$5,000</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">2/11</td>
                      <td className="border border-gray-700 p-3 bg-red-900/30 text-red-400">A Vũ</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$10,000</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">9/11</td>
                      <td className="border border-gray-700 p-3 bg-red-900/30 text-red-400">A Vũ</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$20,000</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">14/11</td>
                      <td className="border border-gray-700 p-3 bg-red-900/30 text-red-400">A Vũ</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$8,000</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">27/11</td>
                      <td className="border border-gray-700 p-3 bg-red-900/30 text-red-400">A Vũ</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$10,000</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">4/12</td>
                      <td className="border border-gray-700 p-3 bg-red-900/30 text-red-400">A Vũ</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$10,000</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">10/12</td>
                      <td className="border border-gray-700 p-3 text-slate-300">A Vũ   A Việt</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$800</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">15/12</td>
                      <td className="border border-gray-700 p-3 text-slate-300">A Vũ</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$2,000</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">15/12</td>
                      <td className="border border-gray-700 p-3 text-slate-300">A Việt</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$1,200</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="border border-gray-700 p-3 text-center text-slate-300">17/12</td>
                      <td className="border border-gray-700 p-3 text-slate-300">A Vũ</td>
                      <td className="border border-gray-700 p-3 text-right text-slate-300 text-lg font-semibold">$2,000</td>
                    </tr>
                    <tr className="bg-yellow-900/30 font-bold">
                      <td colSpan={2} className="border border-gray-700 p-3 text-center text-[#F9D649]">Tổng</td>
                      <td className="border border-gray-700 p-3 text-right text-[#F9D649] text-xl font-bold">$134,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummaryTable;