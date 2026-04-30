<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CardSenate from '../senate/Card-Senate.vue'
import BadgeSenate from '../senate/Badge-Senate.vue'
import ButtonSenate from '../senate/Button-Senate.vue'
import { MenuItem } from 'primevue'

// Mock data - replace with Pinia store later
const stats = ref({
  draft: 3,
  pending: 5,
  approved: 12,
  returned: 2,
})

const recentBudgets = ref([
  {
    id: 1,
    title: 'FY 2027 Annual Budget',
    fy: 2027,
    status: 'under_review',
    updated: '2 hours ago',
  },
  {
    id: 2,
    title: 'FY 2026 Amendment #3',
    fy: 2026,
    status: 'approved',
    updated: '1 day ago',
  },
  {
    id: 3,
    title: 'FY 2026 Amendment #2',
    fy: 2026,
    status: 'returned',
    updated: '3 days ago',
  },
  {
    id: 4,
    title: 'FY 2026 Annual Budget',
    fy: 2026,
    status: 'approved',
    updated: '1 month ago',
  },
  {
    id: 5,
    title: 'FY 2025 Final Budget',
    fy: 2025,
    status: 'archived',
    updated: '1 year ago',
  },
])

const deadlines = ref([
  {
    id: 1,
    type: 'warning',
    message: 'FY 2027 SBPF due in 14 days (May 15, 2026)',
    date: '2026-05-15',
  },
  {
    id: 2,
    type: 'info',
    message: 'Budget orientation on May 1, 2026',
    date: '2026-05-01',
  },
])

// User info
const userName = ref('Budget Officer')
const office = ref('Bureau of Finance')
const currentFY = ref(2027)

// Sidebar menu items
const sidebarItems = ref<MenuItem[]>([
  { label: 'Dashboard', icon: 'pi pi-home', to: '/budget/dashboard' },
  { label: 'Budget', icon: 'pi pi-briefcase', to: '/budget/list' },
  { label: 'PPMP', icon: 'pi pi-file', to: '/budget/ppmp' },
  { label: 'CAA', icon: 'pi pi-list', to: '/budget/caa' },
  { label: 'Reports', icon: 'pi pi-chart-bar', to: '/budget/reports' },
  { label: 'Messages', icon: 'pi pi-comments', to: '/budget/messages' },
  { label: 'Admin', icon: 'pi pi-cog', to: '/budget/admin' },
])

// Stats card colors

const formatStatus = (status: string) => {
  const labels: Record<string, string> = {
    draft: 'Draft',
    pending: 'Pending',
    approved: 'Approved',
    returned: 'Returned',
    archived: 'Archived',
  }
  return labels[status] || status
}

const statusEmojis: Record<string, string> = {
  draft: '🟡',
  pending: '🟡',
  approved: '🟢',
  returned: '🔴',
  archived: '⚪',
}

// Navigate to create SBPF
const createSBPF = () => {
  // Navigate to create page
  console.log('Navigate to create SBPF')
}

// Navigate to comparison view
const compareYears = () => {
  console.log('Navigate to comparison view')
}

// Navigate to import page
const importData = () => {
  console.log('Navigate to import page')
}

// View budget details
const viewBudget = (budgetId: number) => {
  console.log(`View budget ${budgetId}`)
}

// Dismiss deadline alert
const dismissDeadline = (id: number) => {
  deadlines.value = deadlines.value.filter((d) => d.id !== id)
}

// Status badge color mapping
const getStatusColor = (status: string) => {
  const mapping: Record<string, string> = {
    draft: 'warning',
    pending: 'warning',
    approved: 'success',
    returned: 'danger',
    archived: 'info',
  }
  return mapping[status] || 'secondary'
}

// Route and router
const router = useRouter()
</script>

<template>
  <div class="budget-dashboard">
    <!-- Header Bar -->
    <header class="header-bar">
      <div class="header-content">
        <div class="logo">🏛️ Senate Budget Management System</div>
        <div class="user-menu">
          <span class="user-name">{{ userName }}</span>
          <span class="notification-bell">🔔</span>
          <span class="settings-icon">⚙</span>
        </div>
      </div>
    </header>

    <div class="dashboard-container">
      <!-- Sidebar -->
      <aside class="sidebar">
        <nav class="sidebar-nav" role="navigation" aria-label="Budget module navigation">
          <ul class="sidebar-menu">
            <li v-for="item in sidebarItems" :key="item.label">
              <ButtonSenate
                :label="item.label"
                :icon="item.icon"
                variant="text"
                class="sidebar-menu-item"
                @click="router.push(item.to!)"
              />
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="main-content" role="main">
        <!-- Welcome Section -->
        <div class="welcome-section">
          <h1 class="page-title">Budget Dashboard</h1>
          <div class="office-info">Office: {{ office }} | FY {{ currentFY }} Cycle</div>
        </div>

        <!-- Stats Cards -->
        <div class="stats-grid">
          <CardSenate variant="interactive" class="stat-card">
            <template #header>
              <BadgeSenate variant="pill" severity="warning" class="status-badge">Draft</BadgeSenate>
            </template>
            <template #content>
              <div class="stat-value">{{ stats.draft }}</div>
              <div class="stat-label">Draft Budgets</div>
            </template>
          </CardSenate>

          <CardSenate variant="interactive" class="stat-card">
            <template #header>
              <BadgeSenate variant="pill" severity="warning" class="status-badge">Pending</BadgeSenate>
            </template>
            <template #content>
              <div class="stat-value">{{ stats.pending }}</div>
              <div class="stat-label">Pending Review</div>
            </template>
          </CardSenate>

          <CardSenate variant="interactive" class="stat-card">
            <template #header>
              <BadgeSenate variant="pill" severity="success" class="status-badge">Approved</BadgeSenate>
            </template>
            <template #content>
              <div class="stat-value">{{ stats.approved }}</div>
              <div class="stat-label">Approved</div>
            </template>
          </CardSenate>

          <CardSenate variant="interactive" class="stat-card">
            <template #header>
              <BadgeSenate variant="pill" severity="danger" class="status-badge">Returned</BadgeSenate>
            </template>
            <template #content>
              <div class="stat-value">{{ stats.returned }}</div>
              <div class="stat-label">Returned</div>
            </template>
          </CardSenate>
        </div>

        <!-- Quick Actions -->
        <section class="quick-actions" aria-labelledby="quick-actions-heading">
          <h2 id="quick-actions-heading" class="section-heading">Quick Actions</h2>
          <div class="action-buttons">
            <ButtonSenate variant="primary" icon="pi pi-plus" label="Create SBPF" @click="createSBPF" />
            <ButtonSenate variant="outline" icon="pi pi-chart-bar" label="Compare Years" @click="compareYears" />
            <ButtonSenate variant="outline" icon="pi pi-download" label="Import" @click="importData" />
          </div>
        </section>

        <!-- Recent Budgets -->
        <section class="recent-budgets" aria-labelledby="recent-budgets-heading">
          <h2 id="recent-budgets-heading" class="section-heading">
            Recent Budget Proposals
            <ButtonSenate variant="text" size="sm" label="All" class="view-all-btn" />
          </h2>

          <div class="budget-table">
            <table class="budget-table-list">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>FY</th>
                  <th>Status</th>
                  <th>Updated</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="budget in recentBudgets" :key="budget.id" @click="viewBudget(budget.id)" class="budget-row">
                  <td class="budget-title">{{ budget.title }}</td>
                  <td class="budget-fy">{{ budget.fy }}</td>
                  <td class="budget-status">
                    <BadgeSenate :severity="getStatusColor(budget.status)" variant="pill" class="status-badge">
                      {{ statusEmojis[budget.status] }} {{ formatStatus(budget.status) }}
                    </BadgeSenate>
                  </td>
                  <td class="budget-updated">{{ budget.updated }}</td>
                  <td class="budget-actions">
                    <ButtonSenate variant="text" icon="pi pi-eye" size="sm" />
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Pagination -->
            <div class="pagination-controls">
              <ButtonSenate variant="text" icon="pi pi-chevron-left" label="Previous" disabled />
              <span class="page-info">Page 1 of 5</span>
              <ButtonSenate variant="text" icon="pi pi-chevron-right" label="Next" />
            </div>
          </div>
        </section>

        <!-- Deadlines & Reminders -->
        <section class="deadlines-section" aria-labelledby="deadlines-heading">
          <h2 id="deadlines-heading" class="section-heading">Deadlines & Reminders</h2>

          <div class="deadline-cards">
            <div v-for="deadline in deadlines" :key="deadline.id" class="deadline-card">
              <div class="deadline-icon" :class="`deadline-${deadline.type}`">
                {{ deadline.type === 'warning' ? '⚠️' : 'ℹ️' }}
              </div>
              <div class="deadline-content">
                <p class="deadline-message">{{ deadline.message }}</p>
                <button class="dismiss-btn" @click="dismissDeadline(deadline.id)" aria-label="Dismiss alert">×</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
.budget-dashboard {
  min-height: 100vh;
  background-color: #f8f9fa;
}

/* Header Bar */
.header-bar {
  background-color: #0038a8;
  color: white;
  padding: 12px 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-weight: 600;
  font-size: 18px;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-name {
  font-weight: 500;
}

.notification-bell,
.settings-icon {
  cursor: pointer;
  font-size: 20px;
}

/* Dashboard Container */
.dashboard-container {
  display: flex;
  min-height: calc(100vh - 64px);
}

/* Sidebar */
.sidebar {
  width: 280px;
  background-color: #fff;
  border-right: 1px solid #e2e8f0;
  padding: 16px 0;
}

.sidebar-nav {
  padding: 8px 0;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-menu-item {
  width: 100%;
  justify-content: flex-start;
  padding: 12px 24px;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 24px;
  background-color: #f8f9fa;
}

/* Welcome Section */
.welcome-section {
  margin-bottom: 32px;
}

.page-title {
  font-size: 24px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 8px;
}

.office-info {
  color: #718096;
  font-size: 14px;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}

.stat-card {
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.stat-card:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.stat-value {
  font-size: 32px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 8px;
}

.stat-label {
  color: #718096;
  font-size: 14px;
}

/* Quick Actions */
.quick-actions {
  margin-bottom: 32px;
}

.section-heading {
  font-size: 18px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 16px;
}

.action-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* Recent Budgets */
.recent-budgets {
  margin-bottom: 32px;
}

.view-all-btn {
  font-size: 12px;
  padding: 4px 8px;
}

.budget-table {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.budget-table-list {
  width: 100%;
  border-collapse: collapse;
}

.budget-table-list th {
  background-color: #f8f9fa;
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: #2d3748;
  border-bottom: 1px solid #e2e8f0;
}

.budget-table-list td {
  padding: 12px 16px;
  border-bottom: 1px solid #e2e8f0;
  color: #2d3748;
}

.budget-row {
  cursor: pointer;
  transition: background-color 0.2s;
}

.budget-row:hover {
  background-color: #edf2f7;
}

.budget-actions {
  display: flex;
  gap: 4px;
}

.status-badge {
  margin-right: 4px;
}

/* Pagination */
.pagination-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px;
  background-color: #f8f9fa;
}

.page-info {
  color: #718096;
  font-size: 14px;
}

/* Deadlines Section */
.deadlines-section {
  margin-bottom: 32px;
}

.deadline-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.deadline-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.deadline-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.deadline-warning .deadline-icon {
  color: #ed8936;
}

.deadline-info .deadline-icon {
  color: #4299e1;
}

.deadline-content {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.deadline-message {
  margin: 0;
  color: #2d3748;
  font-size: 14px;
  line-height: 1.4;
}

.dismiss-btn {
  background: none;
  border: none;
  font-size: 20px;
  color: #718096;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.dismiss-btn:hover {
  background-color: #e2e8f0;
}

/* Responsive */
@media (max-width: 1279px) {
  .sidebar {
    width: 60px;
  }

  .sidebar-menu-item span {
    display: none;
  }
}

@media (max-width: 767px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .action-buttons {
    flex-direction: column;
  }

  .budget-table-list {
    font-size: 12px;
  }

  .budget-table-list th,
  .budget-table-list td {
    padding: 8px 4px;
  }
}
</style>
