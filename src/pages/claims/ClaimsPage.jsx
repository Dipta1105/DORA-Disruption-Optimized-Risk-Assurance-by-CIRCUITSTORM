import React from 'react';
import { ClipboardCheck, CheckCircle, Clock, XCircle, Filter, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Button from '../../components/common/Button';
import StatCard from '../../components/common/StatCard';
import Table from '../../components/common/Table';
import Badge from '../../components/common/Badge';
import Input from '../../components/common/Input';

const ClaimsPage = () => {
  const navigate = useNavigate();
  
  const claimsData = [
    { id: 'CLM-001', type: 'Property Damage', amount: '$45,000', date: '2026-04-01', status: 'Approved' },
    { id: 'CLM-002', type: 'Cyber Breach', amount: '$12,500', date: '2026-04-02', status: 'Pending' },
    { id: 'CLM-003', type: 'Travel Interruption', amount: '$850', date: '2026-04-03', status: 'Declined' },
    { id: 'CLM-004', type: 'Professional Indemnity', amount: '$7,200', date: '2026-04-03', status: 'Approved' },
    { id: 'CLM-005', type: 'General Liability', amount: '$2,400', date: '2026-04-04', status: 'Pending' },
  ];

  const columns = [
    { 
      header: 'Claim ID', 
      accessor: 'id', 
      className: 'font-mono text-slate-400 font-bold italic',
      cell: (row) => `#${row.id}`
    },
    { 
      header: 'Disruption Type', 
      accessor: 'type',
      cell: (row) => <span className="font-bold text-slate-800 lowercase first-letter:uppercase">{row.type}</span>
    },
    { 
      header: 'Exposure Amount', 
      accessor: 'amount',
      cell: (row) => <span className="font-black text-slate-900">{row.amount}</span>
    },
    { 
      header: 'Filing Date', 
      accessor: 'date',
      cell: (row) => <span className="text-slate-500 font-medium italic">{row.date}</span>
    },
    { 
      header: 'Status', 
      accessor: 'status',
      cell: (row) => (
        <Badge variant={row.status === 'Approved' ? 'success' : row.status === 'Pending' ? 'warning' : 'danger'} size="xs">
          {row.status}
        </Badge>
      )
    },
    { 
      header: 'Actions', 
      className: 'text-right',
      cell: (row) => (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/insurance/claims/${row.id}`);
          }}
          className="text-primary-600 hover:text-primary-700 font-black italic lowercase"
        >
          Investigate →
        </Button>
      )
    }
  ];

  return (
    <div className="space-y-12">
      <PageHeader 
        title="Claims Processing" 
        subtitle="Review and approve active disruption insurance claims."
        action={
          <>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter size={14} /> Filter Logic
            </Button>
            <Button size="sm">New Claim Request</Button>
          </>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard label="Pending Approvals" value="12" change="+3.2%" type="increase" icon={<Clock size={20} />} />
        <StatCard label="Settled Count" value="48" change="+8.5%" type="increase" icon={<CheckCircle size={20} />} />
        <StatCard label="Declined Registry" value="05" change="-1.1%" type="decrease" icon={<XCircle size={20} />} />
        <StatCard label="Settlement Speed" value="4.2d" change="Stable" type="neutral" icon={<ClipboardCheck size={20} />} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
           <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest italic opacity-70">Recent Claims Ledger</h3>
           <Input 
             placeholder="Search active claims..." 
             icon={<Search size={14} />} 
             className="!py-1.5 !pr-10 !text-xs w-64"
             containerClassName="!space-y-0"
           />
        </div>
        <Table 
          columns={columns} 
          data={claimsData} 
          onRowClick={(row) => navigate(`/insurance/claims/${row.id}`)}
        />
      </div>
    </div>
  );
};

export default ClaimsPage;
