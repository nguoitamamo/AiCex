const PricingTiersTable = () => {
  return (
    <div className="max-w-full mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-base">
          <tbody>

            {/* HEADER */}
            <tr className="bg-yellow-300 font-bold text-black">
              <td className="border  border-gray-700 p-3 text-center">
                Trả góp trong vòng 12 tháng
              </td>
              <td className="border  border-gray-700 p-3 text-center">
                <span className="text-lg font-semibold">$60,000/tháng</span>
              </td>
              <td className="border  border-gray-700 p-3 text-center">
                <span className="text-lg font-semibold">$130,000/tháng</span>
              </td>
              <td className="border  border-gray-700 p-3 text-center">
                <span className="text-lg font-semibold">$210,000/tháng</span>
              </td>
            </tr>

            {/* ================= HẠ TẦNG ================= */}
            <tr>
              <td
                rowSpan={10}
                className="border  border-gray-700 font-bold text-center align-middle"
              >
                Hạ tầng
              </td>
              <td className="border  border-gray-700 p-3 ">
                1 server vật lý / VPS đơn vùng, backup thủ công
              </td>
              <td className="border  border-gray-700 p-3 ">
                Multi-node (backend, db, cache), backup định kỳ tự động
              </td>
              <td className="border  border-gray-700 p-3 ">
                Multi-region / High Availability Cluster + DR site + Auto-scaling
              </td>
            </tr>

            <tr>
              <td className="border  border-gray-700 p-3">Docker Compose nội bộ</td>
              <td className="border  border-gray-700 p-3">
                Docker Swarm / Light Orchestration
              </td>
              <td className="border  border-gray-700 p-3">
                Kubernetes Cluster (K8s) + ArgoCD + GitOps tự động
              </td>
            </tr>

            <tr>
              <td className="border  border-gray-700 p-3">Build và deploy thủ công</td>
              <td className="border  border-gray-700 p-3">
                CI/CD cơ bản (GitHub Actions/Jenkins) + staging env
              </td>
              <td className="border  border-gray-700 p-3">
                CI/CD full pipeline, IaC (Terraform/Ansible), rollback tự động,
                security scan
              </td>
            </tr>

            <tr>
              <td className="border  border-gray-700 p-3">PostgreSQL/Redis đơn node</td>
              <td className="border  border-gray-700 p-3">
                DB replication + backup tự động, Kafka single-node
              </td>
              <td className="border  border-gray-700 p-3">
                Cluster DB + Sharding + Kafka Cluster + Schema Registry +
                Monitoring
              </td>
            </tr>

            <tr>
              <td className="border  border-gray-700 p-3">
                Non-custodial ví cơ bản, 1–2 chain
              </td>
              <td className="border  border-gray-700 p-3">
                Multi-chain, auto fee gas estimator
              </td>
              <td className="border  border-gray-700 p-3">
                Multi-chain + cold/hot wallet policy, MPC / multisig engine,
                on-chain analytics
              </td>
            </tr>

            <tr>
              <td className="border  border-gray-700 p-3">HTTPS + JWT basic auth</td>
              <td className="border  border-gray-700 p-3">
                Keycloak RBAC, rotation key, audit log
              </td>
              <td className="border  border-gray-700 p-3">
                Keycloak HA, SSO/OIDC Bridge, Vault Secret Manager, WAF, IDS/IPS,
                SIEM
              </td>
            </tr>

            <tr>
              <td className="border  border-gray-700 p-3">
                Healthcheck & manual log
              </td>
              <td className="border  border-gray-700 p-3">
                Prometheus + Grafana dashboard
              </td>
              <td className="border  border-gray-700 p-3">
                Full Observability (metrics, traces, logs), Alertmanager,
                SLO/SLA 99.9%, Auto-healing
              </td>
            </tr>

            <tr>
              <td className="border  border-gray-700 p-3">Manual code check</td>
              <td className="border  border-gray-700 p-3">
                Static code scan (SAST), dependency audit
              </td>
              <td className="border  border-gray-700 p-3">
                DAST + container signing, SBOM, supply chain verification,
                security gate CI/CD
              </td>
            </tr>

            <tr>
              <td className="border  border-gray-700 p-3">
                Log lưu cục bộ, không audit
              </td>
              <td className="border  border-gray-700 p-3">
                Audit report cơ bản, access control
              </td>
              <td className="border  border-gray-700 p-3">
                Centralized logging + ISO/SOC2 compliance report + approval flow
                tự động
              </td>
            </tr>

            <tr>
              <td className="border  border-gray-700 p-3">
                Embed chart cơ bản, REST API
              </td>
              <td className="border  border-gray-700 p-3">
                WebSocket update + caching
              </td>
              <td className="border  border-gray-700 p-3">
                Full TradingView engine + indicator overlay + backtest engine +
                historical pipeline
              </td>
            </tr>

            {/* CHI PHÍ HẠ TẦNG */}
            <tr className="bg-yellow-300 font-bold text-black">
              <td className="border  border-gray-700 p-3 text-center">
                Chi phí (Tháng)
              </td>
              <td className="border  border-gray-700 p-3 text-center text-lg font-semibold">$6,000</td>
              <td className="border  border-gray-700 p-3 text-center text-lg font-semibold">$12,000</td>
              <td className="border  border-gray-700 p-3 text-center text-lg font-semibold">$35,000</td>
            </tr>

            {/* ================= VẬN HÀNH ================= */}
            <tr>
              <td
                rowSpan={7}
                className="border  border-gray-700 font-bold text-center align-middle "
              >
                Vận hành
              </td>
              <td className="border  border-gray-700 p-3">
                Khớp lệnh cơ bản, lệnh Limit/Market, 1 cặp giao dịch
              </td>
              <td className="border  border-gray-700 p-3">
                Khớp lệnh real-time + nhiều cặp, order book tối ưu
              </td>
              <td className="border  border-gray-700 p-3">
                Matching Engine tốc độ cao (microservice), hỗ trợ Stop-Limit, OCO,
                Margin/Futures
              </td>
            </tr>

            <tr>
              <td className="border  border-gray-700 p-3">
                Lưu trữ số dư user + nạp/rút thủ công
              </td>
              <td className="border  border-gray-700 p-3">
                Tích hợp ví nóng/lạnh, tự động ghi nhận on-chain
              </td>
              <td className="border  border-gray-700 p-3">
                Auto reconciliation, multi-chain settlement, fee policy engine,
                batch withdrawal
              </td>
            </tr>

            <tr>
              <td className="border  border-gray-700 p-3">2FA, HTTPS</td>
              <td className="border  border-gray-700 p-3">
                Xác thực đa lớp, whitelist địa chỉ, anti-fraud
              </td>
              <td className="border  border-gray-700 p-3">
                MPC/Multisig, anomaly detection (AI), transaction risk scoring,
                SOC alert
              </td>
            </tr>

            <tr>
              <td className="border  border-gray-700 p-3">
                Thêm/sửa cặp giao dịch thủ công
              </td>
              <td className="border  border-gray-700 p-3">
                Dashboard quản trị thị trường, quản lý sản phẩm spot
              </td>
              <td className="border  border-gray-700 p-3">
                Dynamic market config, futures/perpetual, token launchpad, index
                & derivatives
              </td>
            </tr>

            <tr>
              <td className="border  border-gray-700 p-3">
                Giới hạn rút tiền theo ngày, cảnh báo nội bộ
              </td>
              <td className="border  border-gray-700 p-3">
                AML/KYC kiểm tra cơ bản, log truy vết
              </td>
              <td className="border  border-gray-700 p-3">
                AI risk engine, AML nâng cao, chain analysis
                (TRM/Chainalysis), compliance report
              </td>
            </tr>

            <tr>
              <td className="border  border-gray-700 p-3">
                Giao dịch và support thủ công
              </td>
              <td className="border  border-gray-700 p-3">
                Dashboard vận hành + ticket support
              </td>
              <td className="border  border-gray-700 p-3">
                Auto ticket routing, AI Ops, auto-recovery, realtime ops
                monitoring
              </td>
            </tr>

            <tr>
              <td className="border  border-gray-700 p-3">
                CRUD user cơ bản, xác minh email
              </td>
              <td className="border  border-gray-700 p-3">
                Role-based access (RBAC), phân loại user (Trader/Admin)
              </td>
              <td className="border  border-gray-700 p-3">
                Tiered access, KYC tier automation, SSO/SSO-bridge, phân quyền theo
                tổ chức/suba
              </td>
            </tr>

            {/* CHI PHÍ VẬN HÀNH */}
            <tr className="bg-yellow-300 font-bold text-black">
              <td className="border  border-gray-700 p-3 text-center">
                Chi phí (Tháng)
              </td>
              <td className="border  border-gray-700 p-3 text-center text-lg font-semibold">$28,000</td>
              <td className="border  border-gray-700 p-3 text-center text-lg font-semibold">$54,000</td>
              <td className="border  border-gray-700 p-3 text-center text-lg font-semibold">$84,000</td>
            </tr>

            {/* DAU */}
            <tr className="bg-orange-500 font-bold text-black">
              <td className="border  border-gray-700 p-3 text-center">
                DAU (Daily Active User)
              </td>
              <td className="border  border-gray-700 p-3 text-center">&lt;10K</td>
              <td className="border  border-gray-700 p-3 text-center">10K - 25K</td>
              <td className="border  border-gray-700 p-3 text-center">25K - 50K</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTiersTable;
