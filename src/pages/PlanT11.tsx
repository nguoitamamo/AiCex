import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import ProjectPlanNov2025 from '../components/KehoachT11';

export function PlanT11() {
  return (
    <Layout>
      <Section title="Kế Hoạch Chi Phí T11/2025" subtitle="Chi tiết kế hoạch chi phí tháng 11 năm 2025.">
        <div id="plan-t11" className="scroll-mt-24">
          <ProjectPlanNov2025 />
        </div>
      </Section>
    </Layout>
  );
}

