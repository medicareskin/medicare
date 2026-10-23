import React, { useState } from 'react';
import { Smartphone, Monitor, X, RefreshCw } from 'lucide-react';
import MobileHomeView from './MobileHomeView';

export default function MobileViewDeviceSimulator({
  isOpen,
  onClose,
  onOpenBooking,
  onOpenNavigator,
  onOpenCostPlanner,
  onOpenPortal,
  onSelectTreatment,
  onTabChange
}) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 11000,
        background: 'rgba(20, 12, 28, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      {/* Top Floating Control Bar */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(16px)',
          borderRadius: '30px',
          padding: '8px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.8)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#942876', fontWeight: 800, fontSize: '13px' }}>
          <Smartphone size={18} />
          <span>Medicare Skin · Mobile UX/UI Blueprint Preview</span>
        </div>

        <button
          onClick={onClose}
          style={{
            background: '#F0EAF1',
            border: 'none',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#2B1B4D'
          }}
          title="Exit Mobile Simulator"
        >
          <X size={16} />
        </button>
      </div>

      {/* iPhone 16 Pro Device Frame Mockup */}
      <div
        style={{
          width: '400px',
          maxWidth: '94vw',
          height: '820px',
          maxHeight: '85vh',
          background: '#FFFFFF',
          borderRadius: '48px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.5), 0 0 0 12px #2A2530, 0 0 0 14px #4A4054',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dynamic Island / Speaker Notch */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '110px',
            height: '28px',
            background: '#000000',
            borderRadius: '20px',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: '10px'
          }}
        >
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#111827', border: '1px solid #374151' }} />
        </div>

        {/* Scrollable Mobile Screen Content */}
        <div
          style={{
            flexGrow: 1,
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            paddingTop: '38px',
            background: '#FAF7F4'
          }}
        >
          <MobileHomeView
            onOpenBooking={onOpenBooking}
            onOpenNavigator={onOpenNavigator}
            onOpenCostPlanner={onOpenCostPlanner}
            onOpenPortal={onOpenPortal}
            onSelectTreatment={onSelectTreatment}
            onTabChange={(tab) => {
              onClose();
              if (onTabChange) onTabChange(tab);
            }}
          />
        </div>

        {/* iOS Home Indicator Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '6px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            height: '4px',
            background: '#000000',
            borderRadius: '2px',
            zIndex: 100
          }}
        />
      </div>
    </div>
  );
}
