
const TradingFeeComponent = () => {
  const vipData = [
    {
      vip: 'VIP 0',
      spotMaker: '0,125%/0,125%',
      spotBalance: '0 USDT',
      spotHolding: '> 0 USDT',
      spotToken: '> 0',
      futureMaker: '0,015%/0,055%',
      futureBalance: '0 USDT',
      futureHolding: '> 0 USDT',
      futureToken: '> 0'
    },
    {
      vip: 'VIP 1',
      spotMaker: '0,1%/0,1%',
      spotBalance: '> 30,000 USDT',
      spotHolding: '> 500,000 USDT',
      spotToken: '> 4,852',
      futureMaker: '0,013%/0,053%',
      futureBalance: '> 30,000 USDT',
      futureHolding: '> 5,000,000 USDT',
      futureToken: '> 4,852'
    },
    {
      vip: 'VIP 2',
      spotMaker: '0,08%/0,08%',
      spotBalance: '> 50,000 USDT',
      spotHolding: '> 2,000,000 USDT',
      spotToken: '> 8,758',
      futureMaker: '0,011%/0,05%',
      futureBalance: '> 50,000 USDT',
      futureHolding: '> 10,000,000 USDT',
      futureToken: '> 8,758'
    },
    {
      vip: 'VIP 3',
      spotMaker: '0,065%,0,065%',
      spotBalance: '> 250,000 USDT',
      spotHolding: '> 8,000,000 USDT',
      spotToken: '> 32,557',
      futureMaker: '0,01%/0,048',
      futureBalance: '> 250,000 USDT',
      futureHolding: '> 20,000,000 USDT',
      futureToken: '> 32,557'
    },
    {
      vip: 'VIP 4',
      spotMaker: '0,052%/0,05%',
      spotBalance: '> 750,000 USDT',
      spotHolding: '> 30,000,000 USDT',
      spotToken: '> 125,321',
      futureMaker: '0,08%/0,046%',
      futureBalance: '> 750,000 USDT',
      futureHolding: '> 50,000,000 USDT',
      futureToken: '> 125,321'
    },
    {
      vip: 'VIP 5',
      spotMaker: '0,035%/0,04%',
      spotBalance: '> 2,000,000 USDT',
      spotHolding: '> 50,000,000 USDT',
      spotToken: '> 320,190',
      futureMaker: '0,06%/0,043%',
      futureBalance: '> 2,000,000 USDT',
      futureHolding: '> 100,000,000 USDT',
      futureToken: '> 320,190'
    }
  ];

  return (
    <div className="max-w-full mx-auto p-6 space-y-8 bg-black text-white">
      {/* Bảng hoàn phí giao dịch */}
      <div id="node-features" className="bg-gray-900 rounded-lg shadow-lg overflow-hidden scroll-mt-24 border border-gray-800">



      {/* Phần OG - Coin & Stablecoin */}
      <div id="inverse-roi" className="bg-gray-900 rounded-lg shadow-lg p-6 space-y-6 scroll-mt-24 border border-gray-800">
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg">
          OG - Coin & Stablecoin của sàn
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-3 text-purple-400">1. Coin & Stablecoin của sàn</h3>
            <div className="ml-4 space-y-3">
              <div>
                <p className="font-semibold text-white">Coin sàn (AIEX):</p>
                <p className="text-gray-300 ml-4">• Token chính thức của sàn. Sẽ được phát hành sau khi hoàn thành giai đoạn OG.</p>
                <p className="text-gray-300 ml-4">• Có thể giao dịch Spot và rút ra ngoài on-chain.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Stablecoin sàn (USDI):</p>
                <p className="text-gray-300 ml-4">• Đơn vị nội bộ, off-chain.</p>
                <p className="text-gray-300 ml-4">• Chức năng: Mở khóa cho người mua OG. Chi trả cho các hoạt động trong hệ sinh thái. Sau này được dùng để mua coin sàn AIEX.</p>
                <p className="text-gray-300 ml-4">• Có thể lock/unlock, chuyển giữa người dùng, và swap sang AIEX (sau khi AIEX list).</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3 text-purple-400">2. Tính năng OG</h3>
            <div className="ml-4 space-y-3">
              <div>
                <p className="font-semibold text-white">OG là gì?</p>
                <p className="text-gray-300 ml-4">• Quyền lợi đặc biệt mà người dùng có thể mua trên sàn (không phải token on-chain).</p>
                <p className="text-gray-300 ml-4">• Điều kiện: Người dùng phải có USDT trong ví Funding.</p>
                <p className="text-gray-300 ml-4">• Hỗ trợ nạp USDT qua nhiều mạng (ban đầu là BSC và Ethereum).</p>
              </div>
              <div>
                <p className="font-semibold text-white">Cấu hình gói OG:</p>
                <p className="text-gray-300 ml-4">• Các thông tin: Tên gói, giá bán, số lượng, đã bán, lợi nhuận, thời gian tính lợi nhuận (ngày và tuần).</p>
                <p className="text-gray-300 ml-4">• Nếu hết giai đoạn → tự động mở giai đoạn sau.</p>
                <p className="text-gray-300 ml-4">• Ví dụ: lợi nhuận 200% trong 10 ngày, giá 1$ → mua 1 OG giá 5000 USDT → nhận 10000 USDT quy đổi ra USDI (mỗi ngày trả 1000 USDI).</p>
              </div>
              <div>
                <p className="font-semibold text-white">Coin trả lãi stablecoin sàn (USDI):</p>
                <p className="text-gray-300 ml-4">• Tên coin, giá trị quy đổi.</p>
                <p className="text-gray-300 ml-4">• Có thể thay đổi giá USDI để điều chỉnh lượng trả.</p>
                <p className="text-gray-300 ml-4">• Trả hàng ngày dựa trên OG đã mua.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Quản lý hiển thị:</p>
                <p className="text-gray-300 ml-4">• Mỗi đợt bán hiển thị 100 OG.</p>
                <p className="text-gray-300 ml-4">• Khi bán hết → tự động mở đợt mới với giá cao hơn (không công bố trước).</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3 text-purple-400">3. Quyền lợi OG & VIP</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-300">• Người dùng mua càng nhiều OG → cấp VIP càng cao.</p>
              <p className="text-gray-300">• VIP Level quyết định vào số lượng OG đã mua.</p>
              <p className="text-gray-300">• Giảm phí giao dịch Spot & Futures.</p>
              <p className="text-gray-300">• Được hỗ trợ ưu tiên (CS, nạp/rút nhanh hơn).</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3 text-purple-400">4. Cơ chế Unlock USDI</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-300">• Người mua OG được unlock hằng ngày trong vòng 24 tháng (~730 ngày).</p>
              <p className="text-gray-300">• Tổng USDI unlock = số USDT đã bỏ ra mua OG (1:1, có thể thay đổi sau).</p>
              <p className="text-gray-300">• Ví dụ: Mua 10 OG giá 0.3 USD → trả 3 USDT. Được unlock 3 USDI chia đều trong 730 ngày.</p>
              <p className="text-gray-300">• Quy đổi: Sau khi AIEX go to market sẽ có 2 cặp để tạo thanh khoản USDI → AIEX và AIEX → USDT. Có thể rút về ví ngoài.</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3 text-purple-400">5. Các giai đoạn</h3>
            <div className="ml-4 space-y-3">
              <div>
                <p className="font-semibold text-white">Giai đoạn 1: Mở bán OG</p>
                <p className="text-gray-300 ml-4">• Giá OG = 5000 USDT.</p>
                <p className="text-gray-300 ml-4">• Thông tin: Tên gói, giá, lợi nhuận 200% trong 2 năm.</p>
                <p className="text-gray-300 ml-4">• Thanh toán bằng USDT, nhận lãi bằng USDI.</p>
                <p className="text-gray-300 ml-4">• Balance USDI có thể lock/unlock.</p>
                <p className="text-gray-300 ml-4">• Chuyển USDI giữa user bằng UID + số lượng.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Giai đoạn 2: List coin AIEX</p>
                <p className="text-gray-300 ml-4">• Mở unlock balance USDI để trade Spot</p>
                <p className="text-gray-300 ml-4">• Pair giao dịch: AIEX/USDI (giá 0.5$ ban đầu).</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3 text-purple-400">6. Chức năng chính trên hệ thống</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-300">• <span className="font-semibold text-white">Funding Wallet:</span> Nạp USDT qua BSC/Ethereum.</p>
              <p className="text-gray-300">• <span className="font-semibold text-white">Mua OG:</span> Dùng USDT từ Funding Wallet.</p>
              <p className="text-gray-300">• <span className="font-semibold text-white">Nhận lãi:</span> Hằng ngày trả lãi bằng USDI.</p>
              <p className="text-gray-300">• <span className="font-semibold text-white">USDI Management:</span> Lock / Unlock, Chuyển cho user khác, Swap sang AIEX.</p>
              <p className="text-gray-300">• <span className="font-semibold text-white">Hiển thị OG Sale:</span> Luôn hiển thị 100 OG trong 1 đợt.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Phần Referral + KYC */}
      <div id="node-tiers" className="bg-gray-900 rounded-lg shadow-lg p-6 space-y-6 scroll-mt-24 border border-gray-800">
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg">
          REFERRAL + KYC CƠ BẢN
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-3 text-green-400">1. Đăng ký tài khoản</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-300">
                Khi bạn tạo tài khoản mới trên sàn, bạn sẽ được tặng ngay <span className="font-semibold text-green-400">100 token AIEX</span> (ở trạng thái khóa).
              </p>
              <p className="text-gray-300">Sau khi bạn hoàn tất KYC (xác minh danh tính):</p>
              <p className="text-gray-300 ml-4">
                • Hệ thống sẽ mở khóa <span className="font-semibold text-green-400">10 AIEX</span> trong số 100 token này để bạn có thể sử dụng.
              </p>
              <p className="text-gray-300 ml-4">
                • <span className="font-semibold text-green-400">90 AIEX</span> còn lại sẽ được mở khóa dần khi bạn tham gia các nhiệm vụ hoặc chương trình khuyến khích trong tương lai (ví dụ: giao dịch, nạp tiền, staking…).
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3 text-green-400">2. Giới thiệu bạn bè (Referral)</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-300">Khi bạn giới thiệu bạn bè đăng ký qua link của mình:</p>
              <p className="text-gray-300 ml-4">
                • Bạn sẽ nhận ngay <span className="font-semibold text-green-400">10 AIEX token</span> (khóa).
              </p>
              <p className="text-gray-300 ml-4">
                • Khi bạn bè hoàn tất KYC, 10 AIEX này sẽ được <span className="font-semibold text-green-400">mở khóa</span> cho bạn.
              </p>
              <p className="text-gray-300 mt-3">
                <span className="font-semibold text-white">Quyền lợi thêm</span> (ở các giai đoạn sau):
              </p>
              <p className="text-gray-300 ml-4">
                • Mỗi khi bạn bè giao dịch trên sàn, bạn sẽ nhận được một phần phí giao dịch của họ hoàn lại cho bạn.
              </p>
              <p className="text-gray-300 ml-4">
                • Tỷ lệ hoa hồng có thể tùy chỉnh, giúp bạn xây dựng nguồn thu nhập thụ động lâu dài.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3 text-green-400">3. Ghi chú quan trọng</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-300">
                • Tất cả token AIEX từ chương trình thưởng đăng ký và giới thiệu sẽ được nhận dưới dạng <span className="font-semibold text-white">token khóa</span>, và chỉ có thể sử dụng sau khi mở khóa.
              </p>
              <p className="text-gray-300">Sau khi AIEX chính thức niêm yết (listing), bạn có thể:</p>
              <p className="text-gray-300 ml-4">
                • Dùng AIEX để giao dịch Spot/Futures.
              </p>
              <p className="text-gray-300 ml-4">
                • Hoặc quy đổi sang USDT và rút về ví cá nhân.
              </p>
            </div>
          </div>
        </div>
      </div>




        <h1 className="bg-blue-600 text-center text-2xl font-bold py-4 text-white">
          Hoàn phí giao dịch
        </h1>
        
        {/* Bảng SPOT */}
        <div className="mb-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-base">
              <thead>
                <tr>
                  <th rowSpan={2} className="border border-gray-700 bg-gray-800 p-3 text-left font-bold align-middle min-w-[100px] text-white">
                    CÁC CẤP VIP
                  </th>
                  <th rowSpan={2} className="border border-gray-700 bg-gray-800 p-3 text-center font-bold align-middle text-white">
                    <div>Maker/Taker</div>
                    <div>SPOT</div>
                  </th>
                  <th colSpan={3} className="border border-gray-700 bg-orange-600 p-3 text-center font-bold text-white">
                    ĐIỀU KIỆN YÊU CẦU SPOT
                  </th>
                </tr>
                <tr>
                  <th className="border border-gray-700 bg-orange-600 p-3 text-center text-white">
                    Số dư hàng ngày spot 30 ngày
                  </th>
                  <th className="border border-gray-700 bg-orange-600 p-3 text-center text-white">
                    Khối lượng giao dịch spot 30 ngày
                  </th>
                  <th className="border border-gray-700 bg-orange-600 p-3 text-center text-white">
                    Số dư token sàn 30 ngày
                  </th>
                </tr>
              </thead>
              <tbody>
                {vipData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
                    <td className="border border-gray-700 p-3 font-semibold text-white">{row.vip}</td>
                    <td className="border border-gray-700 p-3 text-center text-gray-300">{row.spotMaker}</td>
                    <td className="border border-gray-700 p-3 text-center text-gray-300">{row.spotBalance}</td>
                    <td className="border border-gray-700 p-3 text-center text-gray-300">{row.spotHolding}</td>
                    <td className="border border-gray-700 p-3 text-center text-gray-300">{row.spotToken}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bảng FUTURE */}
        <div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-base">
              <thead>
                <tr>
                  <th rowSpan={2} className="border border-gray-700 bg-gray-800 p-3 text-left font-bold align-middle min-w-[100px] text-white">
                    CÁC CẤP VIP
                  </th>
                  <th rowSpan={2} className="border border-gray-700 bg-gray-800 p-3 text-center font-bold align-middle text-white">
                    <div>Maker/Taker</div>
                    <div>FUTURE</div>
                  </th>
                  <th colSpan={3} className="border border-gray-700 bg-yellow-600 p-3 text-center font-bold text-white">
                    ĐIỀU KIỆN YÊU CẦU FUTURE
                  </th>
                </tr>
                <tr>
                  <th className="border border-gray-700 bg-yellow-600 p-3 text-center text-white">
                    Số dư hàng ngày future 30 ngày
                  </th>
                  <th className="border border-gray-700 bg-yellow-600 p-3 text-center text-white">
                    Khối lượng giao dịch future 30 ngày
                  </th>
                  <th className="border border-gray-700 bg-yellow-600 p-3 text-center text-white">
                    Số dư token sàn 30 ngày
                  </th>
                </tr>
              </thead>
              <tbody>
                {vipData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
                    <td className="border border-gray-700 p-3 font-semibold text-white">{row.vip}</td>
                    <td className="border border-gray-700 p-3 text-center text-gray-300">{row.futureMaker}</td>
                    <td className="border border-gray-700 p-3 text-center text-gray-300">{row.futureBalance}</td>
                    <td className="border border-gray-700 p-3 text-center text-gray-300">{row.futureHolding}</td>
                    <td className="border border-gray-700 p-3 text-center text-gray-300">{row.futureToken}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Nội dung điều kiện hoàn phí */}
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 space-y-4 border border-gray-800">
        <div>
          <h3 className="font-bold text-lg mb-2 text-white">1. Mục đích</h3>
          <p className="text-gray-300">
            Khuyến khích người dùng phát triển mạng lưới và tăng tính gắn kết cộng đồng thông qua chương trình hoàn phí trực tiếp khi giới thiệu người dùng mới (F1).
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2 text-white">2. Đối tượng áp dụng</h3>
          <p className="text-gray-300">
            Người dùng đã đăng ký tài khoản trên sàn và kích hoạt mã giới thiệu (Referral Code).
          </p>
          <p className="text-gray-300">
            Chương trình chỉ áp dụng cho F1 (tức là người dùng trực tiếp do bạn giới thiệu).
          </p>
          <p className="text-gray-300">
            Không áp dụng cho F2, F3 hoặc các cấp khác.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2 text-white">3. Cơ chế hoàn phí</h3>
          <p className="text-gray-300">
            Tổng tỷ lệ hoàn phí: 15% tổng phí giao dịch (Trading Fee) phát sinh từ tài khoản F1.
          </p>
          <p className="text-gray-300">
            ➜ Tỷ lệ này có thể tùy chỉnh linh hoạt FO có thể tự tính chính (ví dụ: 12% cho F0 – 3% cho F1, hoặc toàn bộ 15% cho F0).
          </p>
          <p className="text-gray-300">
            Thời gian hoàn: 9h sáng mỗi ngày.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2 text-white">4. Quy định chi tiết</h3>
          <p className="text-gray-300">
            Hoàn phí chỉ áp dụng cho các giao dịch Spot và Futures
          </p>
          <p className="text-gray-300">
            Tỷ lệ hoàn 15% có thể được điều chỉnh theo chương trình ưu đãi định kỳ của sàn nhưng sẽ được thông báo trước tối thiểu 3 ngày.
          </p>
          <p className="text-gray-300">
            Người dùng cần đảm bảo tài khoản được xác minh KYC cấp 1 trở lên để đủ điều kiện nhận thưởng.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2 text-white">5. Ví dụ minh họa</h3>
          <p className="text-gray-300">
            Nếu người dùng A giới thiệu người dùng B (F1).
          </p>
          <p className="text-gray-300">
            B thực hiện giao dịch Futures với tổng phí là 100 USDT.
          </p>
          <p className="text-gray-300 ml-4">
            → A sẽ nhận 15 USDT hoàn phí trực tiếp vào ví Spot vào lúc 9h sáng
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2 text-white">6. Lưu ý</h3>
          <p className="text-gray-300">
            Khi trở thành đại lý thì sẽ không cộng dồn ref trading user thường (Tức là chỉ nhận tới đã 50% từ chương trình đại lý)
          </p>
        </div>
      </div>

    </div>
  );
};

export default TradingFeeComponent;