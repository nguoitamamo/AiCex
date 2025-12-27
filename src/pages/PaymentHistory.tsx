import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import PaymentSummaryTable from '../components/lichsuthanhtoan';

export function PaymentHistory() {
  return (
    <Layout>
      <Section title="Lịch Sử Thanh Toán" subtitle="Tổng hợp lịch sử thanh toán và chi phí cần thanh toán.">
        <div id="payment-history" className="scroll-mt-24">
          <PaymentSummaryTable />
        </div>
      </Section>
    </Layout>
  );
}

