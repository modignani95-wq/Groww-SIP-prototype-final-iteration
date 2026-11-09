import React, { useState } from 'react';
import PhoneFrame from './components/PhoneFrame';
import TopStatusBar from './components/TopStatusBar';
import GrowwHeader from './components/GrowwHeader';
import SubNavTabs from './components/SubNavTabs';
import HeroCard from './components/HeroCard';
import FundListSection from './components/FundListSection';
import BottomNavBar from './components/BottomNavBar';
import FundDetailsDrawer from './components/FundDetailsDrawer';
import XirrModal from './components/XirrModal';
import AnalyticsDrawer from './components/AnalyticsDrawer';
import ImportFundsDrawer from './components/ImportFundsDrawer';
import SearchModal from './components/SearchModal';
import ProfileDrawer from './components/ProfileDrawer';
import NotificationsModal from './components/NotificationsModal';
import WhyHabitModal from './components/WhyHabitModal';
import ExploreView from './components/ExploreView';
import SipsView from './components/SipsView';
import WatchlistView from './components/WatchlistView';
import OtherTabViews from './components/OtherTabViews';
import PullToRefresh from './components/PullToRefresh';

export default function App() {
  const [activeSubTab, setActiveSubTab] = useState('Dashboard');
  const [activeBottomTab, setActiveBottomTab] = useState('mf');
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Modals & Drawers state
  const [isXirrOpen, setIsXirrOpen] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isWhyHabitOpen, setIsWhyHabitOpen] = useState(false);
  const [selectedFund, setSelectedFund] = useState(null);

  const handleRefresh = async () => {
    return new Promise((resolve) => setTimeout(resolve, 800));
  };

  return (
    <PhoneFrame
      onOpenWhyHabit={() => setIsWhyHabitOpen(true)}
      soundEnabled={soundEnabled}
      setSoundEnabled={setSoundEnabled}
    >
      {/* 1. Native Dynamic Top Status Bar (9:41, Cellular, Wifi, Battery) */}
      <TopStatusBar />

      {/* 2. Top Header with Groww Logo wave, Search, Notifications/Scanner, Profile avatar */}
      <GrowwHeader
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
      />

      {/* 3. Sub-Navigation Tabs (Explore, Dashboard, SIPs, Watchlist) */}
      {activeBottomTab === 'mf' && (
        <SubNavTabs
          activeTab={activeSubTab}
          onSelectTab={(tab) => setActiveSubTab(tab)}
        />
      )}

      {/* 4. Main Scrollable View with Pull-to-Refresh */}
      <PullToRefresh onRefresh={handleRefresh}>
        {activeBottomTab !== 'mf' ? (
          <div className="pb-20">
            <OtherTabViews
              tab={activeBottomTab}
              onBackToMf={() => setActiveBottomTab('mf')}
            />
          </div>
        ) : (
          <div className="pb-20">
            {activeSubTab === 'Dashboard' && (
              <main className="flex-1">
                {/* Primary Hero Dual-View Interactive Card: Habit Mode vs Holdings Mode */}
                <HeroCard
                  onOpenXirr={() => setIsXirrOpen(true)}
                  onOpenAnalytics={() => setIsAnalyticsOpen(true)}
                />

                {/* Fund List Section (Filter/Sort, Active SIP Funds, Import CTA, Disclaimer) */}
                <FundListSection
                  onSelectFund={(fund) => setSelectedFund(fund)}
                  onOpenImport={() => setIsImportOpen(true)}
                />
              </main>
            )}

            {activeSubTab === 'Explore' && (
              <ExploreView onSelectFund={(fund) => setSelectedFund(fund)} />
            )}

            {activeSubTab === 'SIPs' && (
              <SipsView onSelectFund={(fund) => setSelectedFund(fund)} />
            )}

            {activeSubTab === 'Watchlist' && (
              <WatchlistView />
            )}
          </div>
        )}
      </PullToRefresh>

      {/* 5. Fixed Static Bottom Navigation Bar (Stocks, F&O, Mutual Funds [Active], Loans) */}
      <BottomNavBar
        activeBottomTab={activeBottomTab}
        onSelectBottomTab={(tabId) => setActiveBottomTab(tabId)}
      />

      {/* Interactive Modals and Drawers */}
      <FundDetailsDrawer
        fund={selectedFund}
        isOpen={Boolean(selectedFund)}
        onClose={() => setSelectedFund(null)}
      />

      <XirrModal
        isOpen={isXirrOpen}
        onClose={() => setIsXirrOpen(false)}
      />

      <AnalyticsDrawer
        isOpen={isAnalyticsOpen}
        onClose={() => setIsAnalyticsOpen(false)}
      />

      <ImportFundsDrawer
        isOpen={isImportOpen}
        onClose={() => setIsImportOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <ProfileDrawer
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      <NotificationsModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />

      <WhyHabitModal
        isOpen={isWhyHabitOpen}
        onClose={() => setIsWhyHabitOpen(false)}
      />
    </PhoneFrame>
  );
}
