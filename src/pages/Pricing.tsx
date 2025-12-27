import { useState } from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Check } from 'lucide-react';
import { DataTable } from '../components/DataTable';
import { Modal } from '../components/ui/Modal';
import PricingTiersTable from '@/components/pricetable';

export function Pricing() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const tiers = [{
    name: 'Gói Khởi Đầu',
    price: '$600,000',
    description: 'Cho giai đoạn xác thực và thử nghiệm ban đầu.',
    features: ['Hạ tầng & Kiến trúc cơ bản', 'Người dùng & KYC thủ công', 'Ví & Blockchain cơ bản', 'Giao dịch Spot đơn giản', 'Quản trị cơ bản', 'Bảo mật cơ bản'],
    color: 'border-slate-700',
    btnVariant: 'outline' as const
  }, {
    name: 'Gói Cơ Bản',
    price: '$1,300,000',
    description: 'Cho nền tảng đang phát triển với người dùng hoạt động.',
    features: ['Hạ tầng & Kiến trúc nâng cao', 'Người dùng & KYC tự động', 'Ví & Blockchain tự động', 'Giao dịch Spot đầy đủ', 'Quản trị nâng cao', 'Bảo mật nâng cao', 'Dữ liệu thị trường', 'Giao diện & Mobile'],
    color: 'border-yellow-500/50 bg-yellow-500/5',
    btnVariant: 'primary' as const,
    popular: true
  }, {
    name: 'Gói Nâng Cao',
    price: '$2,100,000',
    description: 'Sàn giao dịch quy mô doanh nghiệp đầy đủ. Đã bao gồm gói cơ bản.',
    features: ['Hạ tầng nâng cao (Kubernetes multi-region)', 'Trading & Wallet nâng cao', 'Compliance & Risk', 'Tài chính & Kế toán', 'Trải nghiệm người dùng', 'Hệ sinh thái mở rộng', 'Bảo mật & Chứng chỉ'],
    color: 'border-red-500/50 bg-red-500/5',
    btnVariant: 'secondary' as const
  }];
  const comparisonData = [{
    category: 'Phát triển SW',
    feature: 'Website & Landing',
    starter: 'Cơ bản',
    basic: 'Branding chính thức',
    advanced: 'Branding chính thức'
  }, {
    category: 'Phát triển SW',
    feature: 'Hệ thống nền tảng',
    starter: 'Video, Biểu đồ mô phỏng',
    basic: 'Ví Web, Dashboard',
    advanced: 'DeFi Vaults, Bridge'
  }, {
    category: 'Phát triển SW',
    feature: 'Smart Contract',
    starter: 'Testnet (BEP-20)',
    basic: 'Mainnet (BEP-20)',
    advanced: 'Nâng cao + Audit'
  }, {
    category: 'Phát triển SW',
    feature: 'Ví Mobile',
    starter: '—',
    basic: 'iOS & Android',
    advanced: 'Native Multi-chain'
  }, {
    category: 'Exchange',
    feature: 'Token hóa',
    starter: 'Cơ bản (1 Tài sản)',
    basic: 'Nâng cao (Nhiều)',
    advanced: 'Doanh nghiệp (Registry)'
  }, {
    category: 'Exchange',
    feature: 'Thanh khoản',
    starter: 'Nội bộ',
    basic: 'DEX / AMM',
    advanced: 'Order Book / Lending'
  }, {
    category: 'Hạ tầng',
    feature: 'Máy chủ',
    starter: '1 VPS',
    basic: '3 Máy chủ (AWS)',
    advanced: 'HA Cluster Đa vùng'
  }, {
    category: 'Hạ tầng',
    feature: 'Bảo mật',
    starter: 'SSL + Cloudflare',
    basic: 'WAF Enterprise',
    advanced: 'DDOS + CI/CD Tự động'
  }, {
    category: 'Vận hành',
    feature: 'Giám sát',
    starter: 'Cơ bản',
    basic: 'Nâng cao',
    advanced: 'Hạ tầng lõi + 24/7'
  }, {
    category: 'Thanh toán',
    feature: 'Trả góp',
    starter: '$45,000 / tháng',
    basic: '$111,500 / tháng',
    advanced: '$187,500 / tháng'
  }];
  const comparisonColumns = [{
    header: 'Danh mục',
    accessorKey: 'category' as const,
    className: 'text-slate-400 text-base w-40 font-medium'
  }, {
    header: 'Tính năng',
    accessorKey: 'feature' as const,
    className: 'font-semibold text-white text-base min-w-[200px]'
  }, {
    header: 'Khởi đầu',
    accessorKey: 'starter' as const,
    className: 'text-slate-300 text-base'
  }, {
    header: 'Cơ bản',
    accessorKey: 'basic' as const,
    className: 'text-yellow-500 text-base font-medium'
  }, {
    header: 'Nâng cao',
    accessorKey: 'advanced' as const,
    className: 'text-red-400 text-base font-medium'
  }];
  return <Layout>
      <Section title="Các Gói Báo Giá" subtitle="Chi phí phát triển phầm mền.">
        {/* Pricing Cards */}
        <div id="pricing-tiers" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 scroll-mt-24">
          {tiers.map(tier => <Card key={tier.name} className={`flex flex-col ${tier.color} relative`}>
              {/* {tier.popular && <div className="absolute top-0 right-0 -mt-3 -mr-3">
                  <Badge variant="warning" className="px-3 py-1 text-sm">
                    Phổ biến nhất
                  </Badge>
                </div>} */}
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <p className="text-sm text-gray-400 mt-2">
                  {tier.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map(feature => <li key={feature} className="flex items-start text-sm text-gray-300">
                      <Check className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>)}
                </ul>
                <Button 
                  variant={tier.btnVariant} 
                  className="w-full"
                  onClick={() => setOpenModal(tier.name)}
                >
                  Chọn {tier.name}
                </Button>
                {/* <div className="mt-4 text-center text-xs text-gray-500">
                  Trả góp 12 tháng có sẵn
                </div> */}
              </CardContent>
            </Card>)}
        </div>

      


        <PricingTiersTable/>
           {/* Detailed Comparison */}
    
        {/* Operational Costs */}
        {/* <div id="operational-costs" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center scroll-mt-24">
          <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
            <h4 className="text-gray-400 text-sm mb-2">
              Chi phí Vận hành Khởi đầu
            </h4>
            <p className="text-2xl font-bold">
              $6,000{' '}
              <span className="text-sm font-normal text-gray-500">/tháng</span>
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
            <h4 className="text-gray-400 text-sm mb-2">
              Chi phí Vận hành Cơ bản
            </h4>
            <p className="text-2xl font-bold text-yellow-500">
              $12,000{' '}
              <span className="text-sm font-normal text-gray-500">/tháng</span>
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
            <h4 className="text-gray-400 text-sm mb-2">
              Chi phí Vận hành Nâng cao
            </h4>
            <p className="text-2xl font-bold text-red-500">
              $35,000{' '}
              <span className="text-sm font-normal text-gray-500">/tháng</span>
            </p>
          </div>
        </div> */}
      </Section>

      {/* Modals */}
      <Modal
        isOpen={openModal === 'Gói Khởi Đầu'}
        onClose={() => setOpenModal(null)}
        title="Gói khởi đầu"
      >
          <div className="space-y-8 text-base text-slate-200 leading-relaxed">
          {/* Phát triển phần mềm */}
          <div>
            <h3 className="text-2xl font-bold text-[#F9D649] mb-5">Phát triển phần mềm</h3>
            
            <div className="space-y-6 ml-4">
              <div>
                <h4 className="font-semibold text-lg text-white mb-3">1. Hạ tầng & Kiến trúc</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>API Gateway đơn giản (điều hướng API).</li>
                  <li>Hệ thống monolith hoặc microservice cơ bản.</li>
                  <li>Database PostgreSQL, cache Redis.</li>
                  <li>Health check & logging cơ bản.</li>
                  <li>Docker Compose triển khai local / VPS.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">2. Người dùng & KYC</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Đăng ký / đăng nhập (email + mật khẩu).</li>
                  <li>2FA Google Authenticator.</li>
                  <li>Hồ sơ cơ bản (tên, email, quốc tịch).</li>
                  <li>KYC thủ công (upload ảnh ID/selfie).</li>
                  <li>Lưu lịch sử đăng nhập, IP.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">3. Ví & Blockchain</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Ví nạp (BTC, ETH, BSC, TRC20).</li>
                  <li>Lắng nghe giao dịch nạp (manual listener).</li>
                  <li>Rút tiền thủ công (admin duyệt rồi broadcast).</li>
                  <li>Cập nhật số dư người dùng (available/frozen).</li>
                  <li>Chuyển nội bộ giữa người dùng.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">4. Giao dịch Spot</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Đặt lệnh Market / Limit.</li>
                  <li>Khớp lệnh FIFO cơ bản.</li>
                  <li>Sổ lệnh (Order Book) realtime.</li>
                  <li>Ghi lịch sử giao dịch.</li>
                  <li>Tính phí giao dịch cố định.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">5. Quản trị</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Quản lý người dùng & ví.</li>
                  <li>Duyệt KYC và rút tiền.</li>
                  <li>Quản lý token, cặp giao dịch.</li>
                  <li>Dashboard số lượng user & volume.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">6. Bảo mật</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Email xác nhận đăng ký, rút tiền.</li>
                  <li>JWT, rate-limit API.</li>
                  <li>Backup DB thủ công.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={openModal === 'Gói Cơ Bản'}
        onClose={() => setOpenModal(null)}
        title="Gói cơ bản"
      >
          <div className="space-y-8 text-base text-slate-200 leading-relaxed">
          {/* Phát triển phần mềm */}
          <div>
            <h3 className="text-2xl font-bold text-[#F9D649] mb-5">Phát triển phần mềm</h3>
            
            <div className="space-y-6 ml-4">
              <div>
                <h4 className="font-semibold text-lg text-white mb-3">1. Hạ tầng & Kiến trúc</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>API Gateway + Service Mesh.</li>
                  <li>CI/CD (GitLab CI hoặc Jenkins).</li>
                  <li>Kafka / RabbitMQ cho luồng sự kiện.</li>
                  <li>Redis cluster cache trading.</li>
                  <li>Monitoring (Prometheus + Grafana).</li>
                  <li>Logging tập trung (ELK / Loki).</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">2. Người dùng & KYC</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Đăng nhập đa phương thức (email, điện thoại, Google).</li>
                  <li>2FA, OTP, IP whitelist.</li>
                  <li>API Key cho trader / bot.</li>
                  <li>Sub-account (cho tổ chức).</li>
                  <li>KYC OCR & Face match (tự động).</li>
                  <li>Risk scoring, geo restriction.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">3. Ví & Blockchain</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Tự động nạp/rút (BTC, ETH, BSC, TRON, SOL).</li>
                  <li>Tự động tính gas fee, retry giao dịch lỗi.</li>
                  <li>Hàng chờ rút tiền (duyệt nhiều bước).</li>
                  <li>Internal transfer tức thì.</li>
                  <li>Proof of Reserve (kiểm toán tài sản).</li>
                  <li>Chain health monitor (theo dõi node).</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">4. Giao dịch Spot</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Hỗ trợ Market / Limit / Stop / OCO.</li>
                  <li>Sổ lệnh 100 cấp.</li>
                  <li>Fee engine (maker/taker).</li>
                  <li>Chống tự khớp (anti-self-trade).</li>
                  <li>Bảo vệ giá (price guard).</li>
                  <li>WebSocket realtime data.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">5. Quản trị</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Dashboard tổng quan (user, volume, revenue).</li>
                  <li>Duyệt rút tiền, xem TX chi tiết.</li>
                  <li>Quản lý token, banner, thông báo.</li>
                  <li>Role-based access (phân quyền).</li>
                  <li>Audit log & config hệ thống runtime.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">6. Bảo mật</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>WAF + Vault bảo mật khóa.</li>
                  <li>Cảnh báo lỗi qua Telegram.</li>
                  <li>Mã hoá AES-256, JWT expiry.</li>
                  <li>Audit bảo mật OWASP.</li>
                  <li>Auto backup định kỳ.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">7. Dữ liệu thị trường</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Ticker, giá, volume, % biến động 24h.</li>
                  <li>Nến OHLC (1m → 1d).</li>
                  <li>API /ticker, /depth, /trades.</li>
                  <li>Lưu lịch sử giao dịch / biểu đồ.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">8. Giao diện & Mobile</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Web App (Next.js + Tailwind + WS).</li>
                  <li>Mobile App (Flutter, iOS/Android).</li>
                  <li>Admin Web (React + Ant Design).</li>
                  <li>Landing page + blog mini SEO.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">9. Module mở rộng</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Referral (hoa hồng theo volume).</li>
                  <li>Staking / Earn (APR cố định).</li>
                  <li>Launchpad (bán token mới).</li>
                  <li>Fiat Gateway.</li>
                  <li>Reward (bonus giao dịch, đăng ký).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={openModal === 'Gói Nâng Cao'}
        onClose={() => setOpenModal(null)}
        title="Gói nâng cao"
      >
          <div className="space-y-8 text-base text-slate-200 leading-relaxed">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
            <p className="text-yellow-400 font-semibold">LƯU Ý: ĐÃ BAO GỒM GÓI CƠ BẢN KÈM THEO</p>
          </div>

          {/* Phát triển phần mềm */}
          <div>
            <h3 className="text-2xl font-bold text-[#F9D649] mb-5">Phát triển phần mềm</h3>
            
            <div className="space-y-6 ml-4">
              <div>
                <h4 className="font-semibold text-lg text-white mb-3">1. Hạ tầng nâng cao</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Kubernetes multi-region, auto-scaling.</li>
                  <li>Blue-Green / Canary deployment.</li>
                  <li>OpenTelemetry (tracing toàn hệ thống).</li>
                  <li>Multi-env monitoring (SRE-ready).</li>
                  <li>Failover, load balancing thông minh.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">2. Trading & Wallet</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Spot + Margin + Futures.</li>
                  <li>Internal Market Maker (MM Bot).</li>
                  <li>FIX API cho đối tác thanh khoản.</li>
                  <li>Multi-chain wallet + MPC (Fireblocks, Safe).</li>
                  <li>Cross-chain bridge integration.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">3. Compliance & Risk</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Hệ thống AML realtime.</li>
                  <li>Travel Rule tích hợp.</li>
                  <li>AI fraud detection.</li>
                  <li>Case management dashboard.</li>
                  <li>Lưu trữ audit immutable (không thể sửa).</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">4. Tài chính & Kế toán</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Ledger kép (double-entry).</li>
                  <li>Báo cáo kế toán IFRS.</li>
                  <li>Reconciliation tự động.</li>
                  <li>Phân tích doanh thu & hoa hồng.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">5. Trải nghiệm người dùng</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Notification Center (push, email, Telegram).</li>
                  <li>Đa ngôn ngữ (i18n).</li>
                  <li>A/B testing, phân tích hành vi.</li>
                  <li>Live chat, ticket support tự động.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">6. Hệ sinh thái mở rộng</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>Launchpad nâng cao (tier-based subscription).</li>
                  <li>NFT marketplace module.</li>
                  <li>Partner API portal.</li>
                  <li>Affiliate & franchise management.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">7. Bảo mật & Chứng chỉ</h4>
                <ul className="space-y-2 ml-6 list-disc text-base">
                  <li>HSM ký giao dịch tự động.</li>
                  <li>Chuẩn SOC2 / ISO 27001.</li>
                  <li>Vulnerability scanner + auto patch.</li>
                  <li>Security dashboard cho quản trị cấp cao.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Layout>;
}