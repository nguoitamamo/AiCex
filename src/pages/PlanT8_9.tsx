import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import ProjectPlanTable from '../components/kehoachT8-9';

export function PlanT8_9() {
  return (
    <Layout>
      <Section title="Kế Hoạch Chi Phí T8-9/2025" subtitle="Chi tiết kế hoạch chi phí tháng 8 và tháng 9 năm 2025.">
        <div id="plan-t8-9" className="scroll-mt-24">
          <ProjectPlanTable />
        </div>
      </Section>
    </Layout>
  );
}

