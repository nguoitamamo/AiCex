import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import ProjectPlanDec2025 from '../components/KehoachT12';

export function PlanT12() {
  return (
    <Layout>
      <Section title="Kế Hoạch Chi Phí T12/2025" subtitle="Chi tiết kế hoạch chi phí tháng 12 năm 2025.">
        <div id="plan-t12" className="scroll-mt-24">
          <ProjectPlanDec2025 />
        </div>
      </Section>
    </Layout>
  );
}

