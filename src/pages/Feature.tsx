import React from 'react';
import { Layout } from '../components/Layout';
import TradingFeeComponent from '../components/feature';

export function Feature() {
  return (
    <Layout>
      <div className="p-6">
        <TradingFeeComponent />
      </div>
    </Layout>
  );
}

