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
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-900 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shadow-xs border border-red-100">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-headline font-bold text-xl text-gray-900">
                MongoDB Database Status
              </h3>
            </div>
            <p className="text-xs text-gray-600">Real-time backend synchronization</p>
          </div>
        </div>

        {/* Status Card */}
        <div
          className={`p-4 rounded-2xl border mb-5 ${
            status?.connected
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : status?.configured
              ? 'bg-amber-50 border-amber-200 text-amber-800'
              : 'bg-gray-50 border-gray-200 text-gray-700'
          }`}
        >
          <div className="flex items-start gap-3">
            {status?.connected ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
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
                <div className="text-[11px] font-semibold flex items-center gap-1 mt-1 text-emerald-700">
                  <Activity className="w-3.5 h-3.5" /> Ping Latency: {status.latencyMs} ms
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Database Details */}
        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-3 mb-5 text-xs font-body">
          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
            <span className="text-gray-600 flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5 text-red-600" /> Database Name
            </span>
            <span className="font-bold text-gray-900 font-mono">
              {status?.dbName || 'brother_workshop'}
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-gray-600 font-bold block uppercase tracking-wider text-[10px]">
              Active MongoDB Collections
            </span>
            <div className="grid grid-cols-3 gap-2 text-center">
              {status?.collections && status.collections.length > 0 ? (
                status.collections.map((col) => (
                  <div key={col.name} className="bg-white p-2 rounded-xl border border-gray-200">
                    <div className="font-bold text-gray-900 text-xs capitalize">{col.name}</div>
                    <div className="text-[11px] text-red-600 font-semibold">{col.count} docs</div>
                  </div>
                ))
              ) : (
                <>
                  <div className="bg-white p-2 rounded-xl border border-gray-200">
                    <div className="font-bold text-gray-900 text-xs">Bookings</div>
                    <div className="text-[11px] text-red-600 font-semibold">Active</div>
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-gray-200">
                    <div className="font-bold text-gray-900 text-xs">Quotes</div>
                    <div className="text-[11px] text-red-600 font-semibold">Active</div>
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-gray-200">
                    <div className="font-bold text-gray-900 text-xs">Users</div>
                    <div className="text-[11px] text-red-600 font-semibold">Active</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Configuration Guide for User */}
        <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-1.5 mb-6">
          <div className="font-bold text-gray-900 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-red-600" /> Production MongoDB Atlas Support
          </div>
          <p className="leading-relaxed text-[11px]">
            To connect your live MongoDB Atlas or hosted database, set <code className="font-mono bg-white border border-gray-200 px-1 py-0.5 rounded text-gray-900">MONGODB_URI</code> in your environment settings.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="px-4 py-2 rounded-xl border border-gray-200 text-xs font-bold text-gray-800 hover:bg-gray-100 transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-red-600' : ''}`} />
            <span>{isRefreshing ? 'Testing Connection...' : 'Test Connection'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
