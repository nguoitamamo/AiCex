import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Contract } from './pages/Contract';
import { Pricing } from './pages/Pricing';
import { Node } from './pages/Node';
import { FinancialPlan } from './pages/FinancialPlan';
import { Documentation } from './pages/Documentation';
import { Projects } from './pages/Projects';
import { Feature } from './pages/Feature';
import { PlanT8_9 } from './pages/PlanT8_9';
import { PlanT10 } from './pages/PlanT10';
import { PlanT11 } from './pages/PlanT11';
import { PlanT12 } from './pages/PlanT12';
import { PaymentHistory } from './pages/PaymentHistory';
export function App() {
  return <Router>
      <Routes>
        <Route path="/" element={<Contract />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/node" element={<Node />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/financial-plan" element={<FinancialPlan />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/plan-t8-9" element={<PlanT8_9 />} />
        <Route path="/plan-t10" element={<PlanT10 />} />
        <Route path="/plan-t11" element={<PlanT11 />} />
        <Route path="/plan-t12" element={<PlanT12 />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
      </Routes>
    </Router>;
}