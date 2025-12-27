const ProjectPlanTable = () => {
  return (
    <div className="max-w-full mx-auto">
      <div className="rounded-md border border-gray-800 overflow-hidden bg-gray-900/50">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-base">
            <thead>
              <tr className="bg-gray-900 text-gray-300">
                <th className="border border-gray-700 p-4 font-bold text-left">Tiêu đề</th>
                <th className="border border-gray-700 p-4 font-bold text-left">Công việc</th>
                <th className="border border-gray-700 p-4 font-bold text-left max-w-xs">Chi tiết</th>
                <th className="border border-gray-700 p-4 font-bold text-left">Chi phí</th>
                <th className="border border-gray-700 p-4 font-bold text-left">Ngày thanh toán</th>
                <th className="border border-gray-700 p-4 font-bold text-left min-w-32">Trạng thái</th>
                <th className="border border-gray-700 p-4 font-bold text-left">Ghi chú</th>
              </tr>
            </thead>
            <tbody className="bg-black/50">
              {/* Khởi tạo ban đầu */}
              <tr className="hover:bg-gray-900/50 transition-colors">
                <td rowSpan={2} className="border border-gray-700 p-4 font-semibold align-top bg-gray-900/30 text-slate-300">
                  Khởi tạo ban đầu
                </td>
                <td className="border border-gray-700 p-4 text-slate-300">UX/UI Start</td>
                <td className="border border-gray-700 p-4 text-gray-400 max-w-xs"></td>
                <td className="border border-gray-700 p-4 text-slate-300 text-lg font-semibold">10,000 USD</td>
                <td rowSpan={2} className="border border-gray-700 p-4 text-center align-middle font-semibold text-slate-300">
                  Ngày 1 hàng tháng
                </td>
                <td className="border border-gray-700 p-4 bg-green-900/30 text-green-400 min-w-32 whitespace-nowrap">Đã thanh toán</td>
                <td rowSpan={2} className="border border-gray-700 p-4 align-top text-gray-400">
                  Máy mọc, công cụ hỗ trợ làm việc
                </td>
              </tr>
              <tr className="hover:bg-gray-900/50 transition-colors">
                <td className="border border-gray-700 p-4 text-slate-300">Tài liệu & tài nguyên</td>
                <td className="border border-gray-700 p-4 text-gray-400 max-w-xs"></td>
                <td className="border border-gray-700 p-4 text-slate-300 text-lg font-semibold">4,000 USD</td>
                <td className="border border-gray-700 p-4 bg-green-900/30 text-green-400 min-w-32 whitespace-nowrap">Đã thanh toán</td>
              </tr>

              {/* Phát triển tính năng */}
              <tr className="hover:bg-gray-900/50 transition-colors">
                <td rowSpan={2} className="border border-gray-700 p-4 font-semibold align-top bg-gray-900/30 text-slate-300">
                  Phát triển tính năng
                </td>
                <td rowSpan={2} className="border border-gray-700 p-4 align-top text-slate-300">
                  3 tính năng đề xuất
                </td>
                <td className="border border-gray-700 p-4 text-gray-400 max-w-xs">
                  Xây dựng OG, Refferal + KYC , BOT
                </td>
                <td className="border border-gray-700 p-4 text-slate-300 text-lg font-semibold">15,000 USD</td>
                <td className="border border-gray-700 p-4 text-right text-gray-400">10/09/2025</td>
                <td className="border border-gray-700 p-4 bg-green-900/30 text-green-400 min-w-32 whitespace-nowrap">Đã thanh toán</td>
                <td rowSpan={2} className="border border-gray-700 p-4 align-top text-gray-400">
                  <span className="text-pink-400 font-semibold">3/15k 26/9</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-900/50 transition-colors">
                <td className="border border-gray-700 p-4 text-gray-400 max-w-xs"></td>
                <td className="border border-gray-700 p-4 text-slate-300 text-lg font-semibold">15,000 USD</td>
                <td className="border border-gray-700 p-4 text-right text-gray-400">15/09/2025</td>
                <td className="border border-gray-700 p-4 bg-yellow-900/30 text-yellow-400 min-w-32 whitespace-nowrap">1 phần</td>
              </tr>

              {/* Chi phí vận hành hàng tháng */}
              <tr className="hover:bg-gray-900/50 transition-colors">
                <td rowSpan={3} className="border border-gray-700 p-4 font-semibold align-top bg-gray-900/30 text-slate-300">
                  Chi phí vận hành hàng tháng
                </td>
                <td className="border border-gray-700 p-4 text-slate-300">
                  <a href="/contract#operations-detail" className="text-blue-400 hover:text-blue-300 underline">Vận hành sàn cơ bản</a>
                </td>
                <td className="border border-gray-700 p-4 text-gray-400 max-w-xs">
                  Cung cấp dữ liệu giá, khớp lệnh, thực hiện ví nóng và lạnh,.... Đảm bảo tất cả vấn đề từ các module được xử lý nhanh chóng cũng như hoạt động mượt mà (Module trên WEB)
                </td>
                <td className="border border-gray-700 p-4 text-slate-300 text-lg font-semibold">7,500 USD</td>
                <td rowSpan={3} className="border border-gray-700 p-4 text-center align-middle font-semibold text-slate-300">
                  Ngày 15 hàng tháng
                </td>
                <td className="border border-gray-700 p-4 bg-red-900/30 text-red-400 font-semibold min-w-32 whitespace-nowrap">
                  Chưa nhận
                </td>
                <td rowSpan={3} className="border border-gray-700 p-4 align-top text-gray-400">
                  DAU dự kiến: 1,000 users/ngày<br/>
                  Bao gồm: Nhân sự 3 ca (9 nhân viên), phí tài nguyên (có bảng chi tiết kèm)
                </td>
              </tr>
              <tr className="hover:bg-gray-900/50 transition-colors">
                <td className="border border-gray-700 p-4 text-slate-300">Các chức năng sàn</td>
                <td className="border border-gray-700 p-4 text-gray-400 max-w-xs">
                  Vận hành, quản lý các module bên trong sàn (ADMIN)
                </td>
                <td className="border border-gray-700 p-4 text-slate-300 text-lg font-semibold">7,500 USD</td>
                <td className="border border-gray-700 p-4 bg-red-900/30 text-red-400 font-semibold min-w-32 whitespace-nowrap">
                  Chưa nhận
                </td>
              </tr>
              <tr className="hover:bg-gray-900/50 transition-colors">
                <td className="border border-gray-700 p-4 text-slate-300">Hỗ trợ chăm sóc KH</td>
                <td className="border border-gray-700 p-4 text-gray-400 max-w-xs">
                  Chăm sóc khách hàng khi sàn có vấn đề
                </td>
                <td className="border border-gray-700 p-4 text-slate-300 text-lg font-semibold">2,500 USD</td>
                <td className="border border-gray-700 p-4 bg-red-900/30 text-red-400 font-semibold min-w-32 whitespace-nowrap">
                  Chưa nhận
                </td>
              </tr>

              {/* Chi phí tái sản thiết bị */}
              {/* Chi phí tài sản thiết bị */}
<tr className="hover:bg-gray-900/50 transition-colors">
  <td
    rowSpan={2}
    className="border border-gray-700 p-4 font-semibold align-top bg-gray-900/30 text-slate-300"
  >
    Chi phí tài sản thiết bị
  </td>

  <td className="border border-gray-700 p-4 text-slate-300">
    3 Macbook
  </td>

  <td className="border border-gray-700 p-4 text-gray-400 max-w-xs"></td>

  {/* GỘP CỘT CHI PHÍ */}
  <td
    rowSpan={2}
    className="border border-gray-700 p-4 text-slate-300 text-lg font-semibold text-center align-middle"
  >
    6,000 USD
    <br />
    <span className="text-gray-400 text-sm">
      Mới, chưa active
    </span>
  </td>

  {/* GỘP CỘT NGÀY THANH TOÁN */}
  <td
    rowSpan={2}
    className="border border-gray-700 p-4 text-center align-middle text-gray-400"
  >
    12/9 – 15/9
  </td>

  <td className="border border-gray-700 p-4 bg-yellow-900/30 text-yellow-400 min-w-32 whitespace-nowrap text-center">
    1 phần
  </td>

  <td
    rowSpan={2}
    className="border border-gray-700 p-4 align-top text-gray-400"
  >
    Bảo mật, chạy tool tạo ví hot, chuyển tiền ví ấm.
  </td>
</tr>

<tr className="hover:bg-gray-900/50 transition-colors">
  <td className="border border-gray-700 p-4 text-slate-300">
    3 iPhone
  </td>

  <td className="border border-gray-700 p-4 text-gray-400 max-w-xs"></td>

  {/* KHÔNG CÓ CỘT CHI PHÍ */}
  {/* KHÔNG CÓ CỘT NGÀY THANH TOÁN */}

  <td className="border border-gray-700 p-4 bg-yellow-900/30 text-yellow-400 min-w-32 whitespace-nowrap text-center">
    1 phần
  </td>
</tr>

              {/* <tr className="hover:bg-gray-900/50 transition-colors">
                <td className="border border-gray-700 p-4 text-slate-300">3 iPhone</td>
                <td className="border border-gray-700 p-4 text-gray-400 max-w-xs"></td>
                <td className="border border-gray-700 p-4 text-gray-400 max-w-xs"></td>
                <td className="border border-gray-700 p-4 text-gray-400 max-w-xs"></td>
                <td className="border border-gray-700 p-4 bg-yellow-900/30 text-yellow-400 min-w-32 whitespace-nowrap">1 phần</td>
              </tr> */}

              {/* Xây dựng Mobile Apps */}
              <tr className="hover:bg-gray-900/50 transition-colors">
                <td className="border border-gray-700 p-4 font-semibold bg-gray-900/30 text-slate-300">
                  Xây dựng Mobile Apps
                </td>
                <td className="border border-gray-700 p-4 text-gray-400 max-w-xs"></td>
                <td className="border border-gray-700 p-4 text-gray-400 max-w-xs"></td>
                <td className="border border-gray-700 p-4 text-slate-300 text-lg font-semibold">17,500 USD</td>
                <td className="border border-gray-700 p-4 text-right text-gray-400">20/9</td>
                <td className="border border-gray-700 p-4 bg-red-900/30 text-red-400 font-semibold min-w-32 whitespace-nowrap">
                  Chưa nhận
                </td>
                <td className="border border-gray-700 p-4 text-gray-400 max-w-xs"></td>
              </tr>

              {/* Tổng */}
              <tr className="bg-gray-900/50">
                <td colSpan={3} className="border border-gray-700 p-4 font-bold text-xl text-[#F9D649]">
                  Tổng
                </td>
                <td className="border border-gray-700 p-4 font-bold text-xl text-[#F9D649]">
                  85,000 USD
                </td>
                <td colSpan={3} className="border border-gray-700 p-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectPlanTable;