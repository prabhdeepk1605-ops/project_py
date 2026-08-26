import React, { useState } from 'react';
import { Database, CheckCircle2, AlertTriangle, RefreshCw, Layers, ShieldCheck, X, HardDrive, Activity } from 'lucide-react';
import { MongoDbStatus } from '../types';
import { api } from '../services/api';

interface MongoStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: MongoDbStatus | null;
  onStatusUpdate: (status: MongoDbStatus) => void;
}

export const MongoStatusModal: React.FC<MongoStatusModalProps> = ({
  isOpen,
  onClose,
  status,
  onStatusUpdate,
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  if (!isOpen) return null;

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const updated = await api.reconnectDb();
      onStatusUpdate(updated);
    } catch (e) {
      console.error(e);
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#faf6f0] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#c4c8bc] relative text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#5a5f5c] hover:text-[#2e3230] p-1.5 rounded-full hover:bg-[#eae6de] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-[#d8f0de] text-[#4a7c59] flex items-center justify-center shadow-xs">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-headline font-bold text-xl text-[#2e3230]">
                MongoDB Database Status
              </h3>
            </div>
            <p className="text-xs text-[#5a5f5c]">Real-time backend synchronization</p>
          </div>
        </div>

        {/* Status Card */}
        <div
          className={`p-4 rounded-2xl border mb-5 ${
            status?.connected
              ? 'bg-[#d8f0de]/60 border-[#4a7c59]/40 text-[#2a6038]'
              : status?.configured
              ? 'bg-[#f8e0a8]/40 border-[#705c30]/40 text-[#705c30]'
              : 'bg-[#f0ece4] border-[#c4c8bc] text-[#5a5f5c]'
          }`}
        >
          <div className="flex items-start gap-3">
            {status?.connected ? (
              <CheckCircle2 className="w-5 h-5 text-[#4a7c59] shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-[#705c30] shrink-0 mt-0.5" />
            )}
            <div className="text-xs space-y-1">
              <div className="font-bold text-sm">
                {status?.connected
                  ? 'Connected to MongoDB Cluster'
                  : status?.configured
                  ? 'MongoDB Configured (Connecting/Retrying)'
                  : 'Operating in Fast In-Memory Database Mode'}
              </div>
              <p className="opacity-90">{status?.message || 'Database status active.'}</p>
              {status?.latencyMs ? (
                <div className="text-[11px] font-semibold flex items-center gap-1 mt-1 text-[#4a7c59]">
                  <Activity className="w-3.5 h-3.5" /> Ping Latency: {status.latencyMs} ms
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Database Details */}
        <div className="bg-white p-4 rounded-2xl border border-[#c4c8bc]/40 space-y-3 mb-5 text-xs font-body">
          <div className="flex justify-between items-center pb-2 border-b border-[#f0ece4]">
            <span className="text-[#5a5f5c] flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5 text-[#4a7c59]" /> Database Name
            </span>
            <span className="font-bold text-[#2e3230] font-mono">
              {status?.dbName || 'terra_workshop'}
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-[#5a5f5c] font-bold block uppercase tracking-wider text-[10px]">
              Active MongoDB Collections
            </span>
            <div className="grid grid-cols-3 gap-2 text-center">
              {status?.collections && status.collections.length > 0 ? (
                status.collections.map((col) => (
                  <div key={col.name} className="bg-[#faf6f0] p-2 rounded-xl border border-[#c4c8bc]/30">
                    <div className="font-bold text-[#2e3230] text-xs capitalize">{col.name}</div>
                    <div className="text-[11px] text-[#4a7c59] font-semibold">{col.count} docs</div>
                  </div>
                ))
              ) : (
                <>
                  <div className="bg-[#faf6f0] p-2 rounded-xl border border-[#c4c8bc]/30">
                    <div className="font-bold text-[#2e3230] text-xs">Bookings</div>
                    <div className="text-[11px] text-[#4a7c59] font-semibold">Active</div>
                  </div>
                  <div className="bg-[#faf6f0] p-2 rounded-xl border border-[#c4c8bc]/30">
                    <div className="font-bold text-[#2e3230] text-xs">Quotes</div>
                    <div className="text-[11px] text-[#4a7c59] font-semibold">Active</div>
                  </div>
                  <div className="bg-[#faf6f0] p-2 rounded-xl border border-[#c4c8bc]/30">
                    <div className="font-bold text-[#2e3230] text-xs">Users</div>
                    <div className="text-[11px] text-[#4a7c59] font-semibold">Active</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Configuration Guide for User */}
        <div className="bg-[#f0ece4] p-3.5 rounded-2xl border border-[#c4c8bc]/40 text-xs text-[#5a5f5c] space-y-1.5 mb-6">
          <div className="font-bold text-[#2e3230] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#4a7c59]" /> Production MongoDB Atlas Support
          </div>
          <p className="leading-relaxed text-[11px]">
            To connect your live MongoDB Atlas or hosted database, set <code className="font-mono bg-white px-1 py-0.5 rounded text-[#2e3230]">MONGODB_URI</code> in your environment settings.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="px-4 py-2 rounded-xl border border-[#c4c8bc] text-xs font-bold text-[#2e3230] hover:bg-[#eae6de] transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-[#4a7c59]' : ''}`} />
            <span>{isRefreshing ? 'Testing Connection...' : 'Test Connection'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#4a7c59] hover:bg-[#2a6038] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
