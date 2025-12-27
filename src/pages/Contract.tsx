import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { DataTable } from '../components/DataTable';
import { Badge } from '../components/ui/Badge';
export function Contract() {
  const overviewData = [{
    category: 'Hệ thống kỹ thuật',
    content: 'Smart contract, backend, frontend'
  }, {
    category: 'Quản trị & bảo mật',
    content: 'Multisig, timelock, audit'
  }, {
    category: 'Tokenomics',
    content: 'Phân bổ, vesting'
  }, {
    category: 'Pháp lý',
    content: 'KYC / AML'
  }, {
    category: 'Tài chính',
    content: 'Báo cáo, kiểm toán'
  }, {
    category: 'Vận hành',
    content: 'Giám sát 24/7'
  }];
  const overviewColumns = [{
    header: 'Hạng mục',
    accessorKey: 'category' as const,
    className: 'font-medium w-1/3'
  }, {
    header: 'Nội dung',
    accessorKey: 'content' as const
  }];
  const operationsData = [{
    id: 1,
    name: 'Hệ thống giao dịch (Trading Core)',
    cost: 'Start: 7,500$',
    detail: [
      'Matching Engine: nơi khớp lệnh mua – bán theo cơ chế order book hoặc AMM.',
      'Order Management: quản lý lệnh (limit, market, stop, IOC, FOK…).',
      'Market Data Feed: cung cấp dữ liệu giá, độ sâu, lịch sử.'
    ]
  }, {
    id: 2,
    name: 'Quản lý tài sản & thanh toán',
    cost: '',
    detail: [
      'Ví nóng / ví lạnh (Wallet Infrastructure): lưu ký, gửi rút tài sản.',
      'Thanh toán nội bộ: cập nhật số dư ngay khi giao dịch khớp.',
      'Kết nối ngân hàng / cổng thanh toán fiat (nếu có).',
      'Đối soát & reconciliation: đảm bảo số dư on-chain khớp với hệ thống.'
    ]
  }, {
    id: 3,
    name: 'An toàn & bảo mật',
    cost: '',
    detail: [
      'Bảo mật hệ thống: firewall, DDoS protection, anti-bot.',
      'Bảo mật tài sản: multi-sig, MPC, cold storage.',
      'Quản trị khóa API: phân quyền, whitelist IP, giám sát truy cập.',
      'Giám sát gian lận: phát hiện wash trade, spoofing, giao dịch bất thường.'
    ]
  }, {
    id: 4,
    name: 'Quản lý thị trường & sản phẩm',
    cost: '',
    detail: [
      'Niêm yết & hủy niêm yết (Listing / Delisting): quy trình chọn token/cổ phiếu.',
      'Quản trị sản phẩm phái sinh: futures, options, margin, funding rate.',
      'Quản lý thanh khoản: hợp tác market maker, quỹ thanh khoản.'
    ]
  }, {
    id: 5,
    name: 'Rủi ro & tuân thủ',
    cost: '',
    detail: [
      'Quản trị rủi ro thị trường: limit vị thế, kiểm soát đòn bẩy, auto-deleveraging.',
      'Quản trị rủi ro tín dụng: margin call, liquidation engine.',
      'Tuân thủ pháp lý: giấy phép, báo cáo cho cơ quan quản lý.',
      'Chống thao túng thị trường: giám sát hành vi bất thường.'
    ]
  }, {
    id: 6,
    name: 'Vận hành & Hậu cần',
    cost: '',
    detail: [
      'Giám sát 24/7: hệ thống monitoring, cảnh báo downtime, latency.',
      'DevOps & hạ tầng: cloud / bare metal, auto-scaling, backup.',
      'Báo cáo & phân tích: PnL, lưu lượng, thanh khoản, người dùng.',
      'Hỗ trợ khẩn cấp: rollback, đóng giao dịch khẩn cấp nếu lỗi hệ thống.'
    ]
  }, {
    id: 7,
    name: 'Quản trị người dùng',
    cost: 'Chưa có',
    detail: [
      'KYC/AML: xác minh danh tính, sàng lọc chống rửa tiền.',
      'Quản lý tài khoản: đăng ký, đăng nhập, reset, phân quyền.',
      'CSKH & hỗ trợ: ticket, live chat, FAQ, cộng đồng.',
      'Trải nghiệm người dùng (UX/UI): web/app mượt, API cho trader chuyên nghiệp.'
    ]
  }];
  const operationsColumns = [{
    header: 'STT',
    accessorKey: 'id' as const,
    className: 'w-12 text-gray-500 align-top'
  }, {
    header: 'Nội dung',
    accessorKey: 'name' as const,
    className: 'font-medium align-top'
  }, {
    header: 'Chi tiết',
    accessorKey: 'detail' as const,
    className: 'text-gray-400 text-xs md:text-sm align-top',
    cell: (row: any) => (
      <div className="space-y-1">
        {Array.isArray(row.detail) ? (
          row.detail.map((line: string, idx: number) => (
            <div key={idx} className="flex items-start">
              <span className="text-white mr-2 mt-1">•</span>
              <span>{line}</span>
            </div>
          ))
        ) : (
          <div className="flex items-start">
            <span className="text-white mr-2 mt-1">•</span>
            <span>{row.detail}</span>
          </div>
        )}
      </div>
    )
  }, {
    header: 'Chi phí',
    accessorKey: 'cost' as const,
    rowSpan: (_item: any, rowIndex: number) => (rowIndex === 0 ? 6 : undefined),
    hideCell: (_item: any, rowIndex: number) => rowIndex > 0 && rowIndex < 6,
    className: 'text-center align-middle',
    cell: (row: any) => (
      <div className="flex items-center text-2xl font-semibold justify-center h-full">
        {row.cost && row.cost !== '' && row.cost !== 'Chưa có' ? (
          <Badge variant="secondary" className="text-xl font-semibold">{row.cost}</Badge>
        ) : row.cost === 'Chưa có' ? (
          <span className="text-gray-400 text-xl">{row.cost}</span>
        ) : (
          <span className="text-gray-400 text-xl">—</span>
        )}
      </div>
    )
  }];
  return <Layout>
    <Section title="AiCex" subtitle="">
      {/* <div id="overview" className="mb-16 scroll-mt-24">
        <h3 className="text-2xl font-bold mb-6 text-[#F9D649]">Tổng quan Vận hành</h3>
        <DataTable columns={overviewColumns} data={overviewData} />
      </div> */}

      <div id="operations-detail" className="mb-16 scroll-mt-24">
        <h3 className="text-2xl font-bold mb-6 text-[#F9D649]">
          Vận hành sàn cơ bản
        </h3>
        <DataTable columns={operationsColumns} data={operationsData} description="Phân tích chi tiết các thành phần vận hành và chi phí liên quan." />
      </div>

      {/* <div id="tech-security" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 scroll-mt-24">
        <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/30">
          <h4 className="font-bold text-lg mb-4 text-[#F9D649]">
            Công nghệ Sử dụng
          </h4>
          <ul className="space-y-2 text-sm text-gray-400 list-disc pl-4">
            <li>Frontend Next.js (App Router)</li>
            <li>Backend NestJS / Go</li>
            <li>Database PostgreSQL / Redis</li>
            <li>Smart Contracts (Solidity)</li>
            <li>Triển khai Vercel</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/30">
          <h4 className="font-bold text-lg mb-4 text-[#F9D649]">
            Bảo mật & Tuân thủ
          </h4>
          <ul className="space-y-2 text-sm text-gray-400 list-disc pl-4">
            <li>Kho bạc Multisig (Gnosis Safe)</li>
            <li>Hợp đồng Timelock</li>
            <li>Kiểm toán bên thứ ba (CertiK)</li>
            <li>Tích hợp KYC / AML</li>
            <li>Oracle Proof-of-Reserve</li>
          </ul>
        </div>
      </div> */}
    </Section>
  </Layout>;
}