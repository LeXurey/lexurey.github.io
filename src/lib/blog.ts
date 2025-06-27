export interface BlogPost {
  id: string;
  title: string;
  titleZh: string;
  excerpt: string;
  excerptZh: string;
  content: string;
  contentZh: string;
  category: string;
  categoryZh: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  tagsZh: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "zkp-enterprise-integration",
    title: "Zero-Knowledge Proofs in Enterprise: A Practical Guide",
    titleZh: "企业中的零知识证明：实用指南",
    excerpt:
      "Exploring how Zero-Knowledge Proofs can be seamlessly integrated into existing enterprise systems while maintaining privacy and compliance.",
    excerptZh:
      "探索零知识证明如何在保持隐私和合规性的同时无缝集成到现有企业系统中。",
    content: `
# Zero-Knowledge Proofs in Enterprise: A Practical Guide

Zero-Knowledge Proofs (ZKPs) represent a revolutionary approach to maintaining privacy while proving knowledge or compliance. In enterprise environments, this technology offers unprecedented opportunities to balance transparency with confidentiality.

## The Enterprise Challenge

Traditional enterprise systems face a fundamental tension between transparency and privacy. Regulators demand visibility into business processes, while companies need to protect proprietary information and sensitive data.

## ZKP Solutions

Our approach to ZKP integration focuses on:

- **Compliance Verification**: Prove regulatory compliance without revealing underlying business data
- **Supply Chain Transparency**: Verify product authenticity and sourcing without exposing trade secrets
- **ESG Reporting**: Demonstrate environmental and social responsibility while protecting competitive information

## Implementation Strategy

1. **Assessment Phase**: Evaluate current systems and identify ZKP integration points
2. **Pilot Development**: Create proof-of-concept implementations
3. **Full Deployment**: Scale ZKP solutions across enterprise systems
4. **Ongoing Optimization**: Continuously improve performance and capabilities

## Conclusion

Zero-Knowledge Proofs offer enterprises a path to achieve both transparency and privacy, revolutionizing how businesses approach compliance and reporting.
    `,
    contentZh: `
# 企业中的零知识证明：实用指南

零知识证明（ZKP）代表了在证明知识或合规性的同时保持隐私的革命性方法。在企业环境中，这项技术为平衡透明度与机密性提供了前所未有的机会。

## 企业面临的挑战

传统企业系统在透明度和隐私之间面临根本性的紧张关系。监管机构要求对业务流程的可见性，而公司需要保护专有信息和敏感数据。

## ZKP解决方案

我们的ZKP集成方法专注于：

- **合规验证**：在不透露基础业务数据的情况下证明监管合规性
- **供应链透明度**：验证产品真实性和来源，而不暴露商业秘密
- **ESG报告**：在保护竞争信息的同时展示环境和社会责任

## 实施策略

1. **评估阶段**：评估当前系统并识别ZKP集成点
2. **试点开发**：创建概念验证实现
3. **全面部署**：在企业系统中扩展ZKP解决方案
4. **持续优化**：不断改进性能和能力

## 结论

零知识证明为企业提供了同时实现透明度和隐私的途径，革命性地改变了企业处理合规和报告的方式。
    `,
    category: "Technical",
    categoryZh: "技术文章",
    author: "Pei Xu",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["ZKP", "Enterprise", "Privacy", "Compliance"],
    tagsZh: ["零知识证明", "企业", "隐私", "合规"],
  },
  {
    id: "esg-blockchain-compliance",
    title: "Revolutionizing ESG Reporting with Blockchain Technology",
    titleZh: "用区块链技术革新ESG报告",
    excerpt:
      "How blockchain and smart contracts are transforming Environmental, Social, and Governance reporting for modern enterprises.",
    excerptZh: "区块链和智能合约如何为现代企业转型环境、社会和治理报告。",
    content: `
# Revolutionizing ESG Reporting with Blockchain Technology

Environmental, Social, and Governance (ESG) reporting has become critical for modern enterprises. Traditional reporting methods often lack transparency and verifiability, creating challenges for stakeholders seeking reliable ESG data.

## The Current ESG Landscape

- **Fragmented Standards**: Multiple ESG frameworks create confusion
- **Data Verification**: Difficulty in verifying reported data
- **Real-time Monitoring**: Lack of continuous ESG tracking
- **Stakeholder Trust**: Limited transparency affects stakeholder confidence

## Blockchain Solutions for ESG

### Immutable Records
Blockchain technology provides tamper-proof records of ESG activities, ensuring data integrity and building stakeholder trust.

### Smart Contract Automation
Automated compliance checking and reporting through smart contracts reduces manual effort and improves accuracy.

### Real-time Monitoring
Continuous data collection and verification enable real-time ESG monitoring and reporting.

## Implementation Benefits

1. **Enhanced Transparency**: Stakeholders can verify ESG claims independently
2. **Reduced Costs**: Automation reduces manual reporting overhead
3. **Improved Accuracy**: Smart contracts eliminate human error
4. **Regulatory Compliance**: Streamlined compliance with multiple frameworks

## Future Outlook

The integration of blockchain technology in ESG reporting represents a fundamental shift toward transparent, verifiable, and automated sustainability reporting.
    `,
    contentZh: `
# 用区块链技术革新ESG报告

环境、社会和治理（ESG）报告已成为现代企业的关键要素。传统报告方法往往缺乏透明度和可验证性，为寻求可靠ESG数据的利益相关者带来挑战。

## 当前ESG格局

- **分散的标准**：多个ESG框架造成混乱
- **数据验证**：验证报告数据的困难
- **实时监控**：缺乏持续的ESG跟踪
- **利益相关者信任**：有限的透明度影响利益相关者信心

## ESG的区块链解决方案

### 不可变记录
区块链技术提供防篡改的ESG活动记录，确保数据完整性并建立利益相关者信任。

### 智能合约自动化
通过智能合约实现自动化合规检查和报告，减少人工工作并提高准确性。

### 实时监控
持续的数据收集和验证实现实时ESG监控和报告。

## 实施效益

1. **增强透明度**：利益相关者可以独立验证ESG声明
2. **降低成本**：自动化减少手动报告开销
3. **提高准确性**：智能合约消除人为错误
4. **监管合规**：简化多个框架的合规性

## 未来展望

区块链技术在ESG报告中的集成代表了向透明、可验证和自动化可持续性报告的根本转变。
    `,
    category: "Research",
    categoryZh: "研究洞察",
    author: "Yang Yu",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["ESG", "Blockchain", "Sustainability", "Compliance"],
    tagsZh: ["ESG", "区块链", "可持续性", "合规"],
  },
  {
    id: "lexurey-compusoft-partnership",
    title:
      "LeXurey Partners with Compusoft Australia for Enhanced ERP Solutions",
    titleZh: "LeXurey与澳大利亚Compusoft合作，增强ERP解决方案",
    excerpt:
      "Announcing our strategic partnership with Compusoft Australia, a Gold Microsoft Partner, to deliver innovative ERP and blockchain solutions.",
    excerptZh:
      "宣布我们与微软金牌合作伙伴澳大利亚Compusoft的战略合作，提供创新的ERP和区块链解决方案。",
    content: `
# LeXurey Partners with Compusoft Australia for Enhanced ERP Solutions

We're excited to announce our strategic partnership with Compusoft Australia, a Gold Microsoft Partner and one of Australia's most established ERP solution providers.

## Partnership Overview

This collaboration combines LeXurey's cutting-edge blockchain and Zero-Knowledge Proof technology with Compusoft's extensive ERP implementation experience and Microsoft ecosystem expertise.

## Key Benefits

### For Clients
- **Integrated Solutions**: Seamless blockchain integration with traditional ERP systems
- **Enhanced Security**: ZKP technology protecting sensitive business data
- **Compliance Automation**: Automated regulatory reporting and compliance checking
- **Cost Efficiency**: Reduced implementation time and costs

### For Partners
- **Technology Innovation**: Access to latest blockchain and ZKP technologies
- **Market Differentiation**: Unique blockchain-enabled ERP offerings
- **Expert Support**: Combined technical expertise and support

## Service Offerings

Our joint solutions include:
- ERP system modernization with blockchain integration
- ESG compliance and reporting automation
- Supply chain transparency solutions
- Smart contract implementation and auditing

## Implementation Approach

1. **Assessment**: Comprehensive analysis of current systems and requirements
2. **Design**: Custom solution architecture combining ERP and blockchain
3. **Development**: Agile implementation with continuous client feedback
4. **Deployment**: Phased rollout with comprehensive training and support
5. **Optimization**: Ongoing performance monitoring and enhancement

## Looking Forward

This partnership represents our commitment to delivering fast, high-quality, and highly affordable tailored ERP solutions across industries. Together, we combine deep technical capability with implementation agility to help businesses scale with confidence.

Contact us today to learn how our partnership can transform your enterprise systems.
    `,
    contentZh: `
# LeXurey与澳大利亚Compusoft合作，增强ERP解决方案

我们很高兴宣布与澳大利亚Compusoft的战略合作，Compusoft是微软金牌合作伙伴，也是澳大利亚最成熟的ERP解决方案提供商之一。

## 合作概述

此次合作将LeXurey的尖端区块链和零知识证明技术与Compusoft广泛的ERP实施经验和微软生态系统专业知识相结合。

## 主要优势

### 对客户而言
- **集成解决方案**：区块链与传统ERP系统的无缝集成
- **增强安全性**：ZKP技术保护敏感业务数据
- **合规自动化**：自动化监管报告和合规检查
- **成本效率**：减少实施时间和成本

### 对合作伙伴而言
- **技术创新**：获得最新的区块链和ZKP技术
- **市场差异化**：独特的区块链驱动ERP产品
- **专家支持**：结合的技术专业知识和支持

## 服务产品

我们的联合解决方案包括：
- 带区块链集成的ERP系统现代化
- ESG合规和报告自动化
- 供应链透明度解决方案
- 智能合约实施和审计

## 实施方法

1. **评估**：全面分析当前系统和需求
2. **设计**：结合ERP和区块链的定制解决方案架构
3. **开发**：敏捷实施，持续客户反馈
4. **部署**：分阶段推出，提供全面培训和支持
5. **优化**：持续性能监控和增强

## 展望未来

此次合作代表了我们致力于为各行业提供快速、高质量、高性价比的定制化ERP解决方案的承诺。我们将深厚的技术能力与实施敏捷性相结合，帮助企业自信地扩展规模。

立即联系我们，了解我们的合作如何转型您的企业系统。
    `,
    category: "Company News",
    categoryZh: "公司新闻",
    author: "LeXurey Team",
    date: "2024-01-05",
    readTime: "5 min read",
    tags: ["Partnership", "ERP", "Compusoft", "Microsoft"],
    tagsZh: ["合作伙伴", "ERP", "Compusoft", "微软"],
  },
  {
    id: "supply-chain-case-study",
    title: "Case Study: Transforming Food Supply Chain Transparency",
    titleZh: "案例研究：变革食品供应链透明度",
    excerpt:
      "How we helped a major food company implement blockchain-based supply chain tracking while maintaining trade secret protection.",
    excerptZh:
      "我们如何帮助一家大型食品公司在保护商业秘密的同时实施基于区块链的供应链跟踪。",
    content: `
# Case Study: Transforming Food Supply Chain Transparency

## Client Challenge

A leading food manufacturer faced increasing pressure from consumers and regulators for supply chain transparency while needing to protect proprietary sourcing relationships and pricing information.

### Key Requirements
- Prove product authenticity and origin
- Verify sustainable sourcing practices
- Maintain competitive pricing confidentiality
- Comply with food safety regulations
- Enable consumer verification

## Our Solution

We implemented a Zero-Knowledge Proof-based supply chain tracking system that provides transparency without compromising sensitive business information.

### Technology Stack
- **ZKP Circuits**: Custom circuits for supply chain verification
- **Blockchain Integration**: Immutable record keeping
- **ERP Connection**: Seamless integration with existing SAP system
- **Mobile App**: Consumer-facing verification interface

### Implementation Process

#### Phase 1: System Analysis (2 weeks)
- Mapped existing supply chain processes
- Identified data sensitivity levels
- Designed ZKP verification requirements

#### Phase 2: Proof of Concept (6 weeks)
- Developed ZKP circuits for key verification points
- Created blockchain integration layer
- Built consumer verification interface

#### Phase 3: Pilot Deployment (8 weeks)
- Selected three product lines for initial testing
- Trained staff on new processes
- Collected performance data and feedback

#### Phase 4: Full Implementation (12 weeks)
- Rolled out to all product lines
- Integrated with existing quality assurance processes
- Launched consumer-facing verification platform

## Results

### Quantitative Outcomes
- **100%** product traceability achieved
- **45%** reduction in audit preparation time
- **30%** increase in consumer trust scores
- **Zero** data breaches or confidentiality issues
- **15%** improvement in regulatory compliance scores

### Qualitative Benefits
- Enhanced consumer confidence
- Streamlined regulatory reporting
- Improved supplier relationships
- Competitive advantage in transparency

## Technical Innovations

### Zero-Knowledge Verification
- Consumers can verify product origin without seeing supplier details
- Auditors can confirm compliance without accessing pricing data
- Supply chain integrity proven without revealing trade secrets

### Smart Contract Automation
- Automatic compliance checking at each supply chain stage
- Real-time alerts for quality or sustainability issues
- Streamlined payment processing based on verified deliveries

## Lessons Learned

1. **Stakeholder Engagement**: Early involvement of all stakeholders is crucial
2. **Gradual Implementation**: Phased rollout reduces risk and allows for optimization
3. **Training Investment**: Comprehensive staff training essential for success
4. **Technology Integration**: Seamless ERP integration minimizes disruption

## Future Enhancements

The client is now exploring:
- Integration with IoT sensors for real-time monitoring
- Expansion to packaging and waste tracking
- Carbon footprint verification using ZKP technology
- Cross-industry supply chain collaboration

## Conclusion

This implementation demonstrates how Zero-Knowledge Proof technology can solve the fundamental tension between transparency and privacy in supply chain management. The client achieved unprecedented transparency while maintaining competitive advantages.

Contact us to learn how similar solutions can transform your supply chain operations.
    `,
    contentZh: `
# 案例研究：变革食品供应链透明度

## 客户挑战

一家领先的食品制造商面临来自消费者和监管机构对供应链透明度日益增长的压力，同时需要保护专有采购关系和定价信息。

### 关键需求
- 证明产品真实性和来源
- 验证可持续采购实践
- 保持竞争定价机密性
- 遵守食品安全法规
- 实现消费者验证

## 我们的解决方案

我们实施了基于零知识证明的供应链跟踪系统，在不泄露敏感业务信息的情况下提供透明度。

### 技术栈
- **ZKP电路**：供应链验证的定制电路
- **区块链集成**：不可变记录保存
- **ERP连接**：与现有SAP系统无缝集成
- **移动应用**：面向消费者的验证界面

### 实施过程

#### 第一阶段：系统分析（2周）
- 映射现有供应链流程
- 识别数据敏感性级别
- 设计ZKP验证要求

#### 第二阶段：概念验证（6周）
- 为关键验证点开发ZKP电路
- 创建区块链集成层
- 构建消费者验证界面

#### 第三阶段：试点部署（8周）
- 选择三个产品线进行初始测试
- 培训员工新流程
- 收集性能数据和反馈

#### 第四阶段：全面实施（12周）
- 推广到所有产品线
- 与现有质量保证流程集成
- 推出面向消费者的验证平台

## 结果

### 定量成果
- 实现**100%**产品可追溯性
- 审计准备时间减少**45%**
- 消费者信任评分提高**30%**
- **零**数据泄露或机密性问题
- 监管合规评分提高**15%**

### 定性效益
- 增强消费者信心
- 简化监管报告
- 改善供应商关系
- 在透明度方面的竞争优势

## 技术创新

### 零知识验证
- 消费者可以验证产品来源而不看到供应商详情
- 审计员可以确认合规性而不访问定价数据
- 在不透露商业秘密的情况下证明供应链完整性

### 智能合约自动化
- 在每个供应链阶段自动合规检查
- 质量或可持续性问题的实时警报
- 基于验证交付的简化付款处理

## 经验教训

1. **利益相关者参与**：所有利益相关者的早期参与至关重要
2. **渐进实施**：分阶段推出降低风险并允许优化
3. **培训投资**：全面的员工培训对成功至关重要
4. **技术集成**：无缝ERP集成最大限度地减少中断

## 未来增强

客户现在正在探索：
- 与物联网传感器集成实现实时监控
- 扩展到包装和废物跟踪
- 使用ZKP技术进行碳足迹验证
- 跨行业供应链协作

## 结论

这一实施展示了零知识证明技术如何解决供应链管理中透明度和隐私之间的根本矛盾。客户在保持竞争优势的同时实现了前所未有的透明度。

联系我们了解类似解决方案如何转型您的供应链运营。
    `,
    category: "Case Study",
    categoryZh: "案例研究",
    author: "Jiahao Zhang",
    date: "2023-12-20",
    readTime: "12 min read",
    tags: ["Supply Chain", "Food Industry", "ZKP", "Case Study"],
    tagsZh: ["供应链", "食品行业", "零知识证明", "案例研究"],
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)));
}
