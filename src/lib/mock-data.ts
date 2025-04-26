
export const churnRiskUsers = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex.j@example.com",
    churnRisk: 87,
    subscription: "Premium",
    lastActive: "2 weeks ago"
  },
  {
    id: 2,
    name: "Maya Patel",
    email: "maya.p@example.com",
    churnRisk: 79,
    subscription: "Family Plan",
    lastActive: "3 days ago"
  },
  {
    id: 3,
    name: "Carlos Rodriguez",
    email: "carlos.r@example.com",
    churnRisk: 72,
    subscription: "Student",
    lastActive: "5 days ago"
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah.w@example.com",
    churnRisk: 68,
    subscription: "Premium",
    lastActive: "Yesterday"
  },
  {
    id: 5,
    name: "Lee Min-ho",
    email: "lee.m@example.com",
    churnRisk: 65,
    subscription: "Individual",
    lastActive: "Today"
  }
];

export const overviewMetrics = [
  {
    title: "Total Subscribers",
    value: "4.2M",
    change: { value: 3.8, isPositive: true }
  },
  {
    title: "Monthly Churn Rate",
    value: "4.6%",
    change: { value: 0.3, isPositive: false }
  },
  {
    title: "Avg. Lifetime Value",
    value: "$246",
    change: { value: 2.1, isPositive: true }
  },
  {
    title: "Engagement Score",
    value: "73/100",
    change: { value: 5, isPositive: true }
  }
];

export const retentionStrategies = [
  {
    title: "Personalized Recommendations",
    description: "Improve algorithm to suggest more relevant content",
    expectedImpact: "High",
    targetSegment: "Casual Listeners"
  },
  {
    title: "Price Optimization",
    description: "Dynamic pricing based on usage patterns",
    expectedImpact: "Medium",
    targetSegment: "Students"
  },
  {
    title: "Engagement Campaigns",
    description: "Re-engagement emails for dormant users",
    expectedImpact: "High",
    targetSegment: "Dormant Users"
  }
];
