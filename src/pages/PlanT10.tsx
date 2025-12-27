import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import ProjectPlanOct2025 from '../components/KehoachT10';

export function PlanT10() {
  return (
    <Layout>
      <Section title="Kế Hoạch Chi Phí T10/2025" subtitle="Chi tiết kế hoạch chi phí tháng 10 năm 2025.">
        <div id="plan-t10" className="scroll-mt-24">
          <ProjectPlanOct2025 />
        </div>
      </Section>
    </Layout>
  );
}

