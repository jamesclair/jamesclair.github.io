import { Component } from 'react';
import { Link } from 'react-router-dom'
import Layout from './layout'
import styles from './resume.module.css'
import BannerImg from './img/telephone.svg'
import EmailIcon from './img/email.svg'
import Globe from './img/globe.svg'
import Github from './img/github.svg'
import Linkedin from './img/linkedin.svg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MY_NAME = "James Clair"
const MY_TITLE = "Distributed Software and Infrastructure Engineer"
const MY_EMAIL = "mailto:clair.james88@gmail.com"
const MY_SUMMARY = "With 20 years of experience in software engineering, operations, and security, I specialize in microservice development, devops, gitops, secops, observability, data intensive applications, distributed architecture and scalable cloud infrastructures. My extensive background in all aspects of modern enterprise software allows me to drive successful projects and mentor teams to achieve excellence. Let me shape your next-gen architecture to unlock its full potential."
const PRO_EXP_HEADER = "Professional Experience"


interface company {
    name: string;
    timeFrame: string;
    jobs: job[];
}
interface job {
    title: string;
    location: string;
    description: string;
    achievements: string;
}
var companies: company[] = [
    {
        name: "Horizon3.ai",
        timeFrame: "Jun 2024-Present",
        jobs: [
            {
                title: "Senior Platform Software Engineer",
                location: "Remote",
                description: "Developed the deployment and operation of secure, ephemeral, and scalable cloud-native platforms in AWS. Collaborated with platform architects to design and implement infrastructure solutions (Crossplane, Kubernetes, ArgoCD) and automated CI/CD pipelines (GitLab CI) to enhance platform performance and developer efficiency. Provided technical leadership and mentorship, driving process improvements and developing infrastructure modules to support cross-functional engineering teams in cloud environments.",
                achievements: "Invented h3env an extensible Python client to improve platform developer performance and reduce the growing complexity of Horizon3 environment lifecycle.  Created Engineering-wide Horizon3 Improvement Proposals Process (HIP) providing a repeatable path for fostering cross-team collaboration on highly impactful changes to H3 products and interfaces.  Migrated all Kubernetes workloads from Fleet to ArgoCD while refactoring their definitions to reduce duplication, drift, and readability."
            }
        ]
    },
    {
        name: "Select Star",
        timeFrame: "Jul 2023-Jan 2024",
        jobs: [
            {
                title: "Senior Platform Software Engineer",
                location: "Remote",
                description: "Designing, refactoring, building, securing, and supporting enterprise pipeline and platform with a focus on collection, ingestion, processing, and analysis of data warehouse and business intelligence data.",
                achievements: "Enabled asynchronous and parallel data collection and ingestion. Improved pipeline testability by adding an ingested batch persistence layer. Introduced the ability to combine multiple parsing engines. Designed foundations of next-gen scalable data pipeline architecture. Up to 700% load-time optimization of multiple web pages backed by SQL."
            }
        ]
    },
    {
        name: "Solv",
        timeFrame: "Feb 2023-Jun 2023",
        jobs: [
            {
                title: "Staff Integration Engineer",
                location: "Remote",
                description: "Led and mentored team in new greenfield development foundations to create a cost-effective and scalable integration platform.",
                achievements: "Created unified provisioning bootstrap to serve as the foundations of next-gen platform.  Refactor of Athena scheduling api integrations.  Introduced Sentry Cron alerting for long running integration jobs."
            }
        ],
    },
    {
        name: "LogRhythm",
        timeFrame: "October 2014-Sep 2022",
        jobs: [
            {
                title: "Tech Lead, Platform Engineering",
                location: "Hybrid",
                description: "Created, led, and mentored a team of highly skilled engineers while researching, designing, and implementing industry best practice tools and frameworks. Building a cost-effective, highly available and scalable, multi-tenant platform, pipeline, and infrastructure supporting up to a million messages per second.",
                achievements: `Led 4 years of technical development of infrastructure for the new Axon cloud-native platform with a public launch in early 2022. Developed comprehensive Kubernetes Operators for OpenSearch, Flink, and LogRhythm Microservices. Created a high-performance multi-tenant data pipeline with enterprise service bus, self-serve domain-specific relational databases, central time-series, and tiered storage NoSQL database, and tenant-specific real-time analytics job clusters. Implemented fully secure and automated development golden paths for localdev and CI/CD. Automated creation, re-creation, and configuration of templated GitOps infra as code environments and platforms. Full adoption, migration and integration of newly acquired software into gold-standard practices. Provided best practice secure and public access to APIs and WebUIs through identity federated role-based access SSO. Founded and staffed "Colossus of Cloud", a team of highly successful and skilled engineers. Earned my Bachelor's in Computer Science and completed the complete data science bootcamp on Udemy.`
            },
            {
                title: "Cloud DevOps Engineer III",
                location: "Boulder, CO",
                description: "Served as LogRhythm product expert on the DevOps team while migrating LogRhythm's core services to a SAAS offering hosted on Google Cloud Platform.",
                achievements: "Developed de facto reference architecture and sizing guides for new cloud service offerings. Automated deployment of LogRhythm core services to Google Cloud Compute environment. Earned certifications in DevOps foundations, ITIL service management, Oracle SQL, and web development."
            },
            {
                title: "Global Technical Release Manager",
                location: "Hybrid",
                description: "Delivered software to customers and internal teams through the development of release consulting, documentation, feedback, User Acceptance Testing, and bug management. Served part-time as TierIV escalations engineer solving the products toughest issues and developing their fixes.",
                achievements: "Successfully revived and managed the Global Early Access Beta Program into across-organizational effort that incrementally introduced software releases while gaining early feedback and re-establishing customer trust. Developed FIPS, High Availability, and Disaster Recovery guides for new next-generation deployment architectures. Created Splunk Integration Guide allowing bulk exportation of data from Splunk to LogRhythm and easing the process of migration from our competitor. Co-rebuilt the Release Champion Program tripling internal content contributions, improving cross-organizational relationships, and chopping our release cycle down from 1 year to 6 months. Co-managed over 4 new product launches, 5 major and 23 minor releases. Authored Threat Intelligence Provider Service and LogRhythm SIEM to CloudAI integration guides. Continuously provided consultation and optimizations helping to scale beyond the 200k and 300k Messages Per Second benchmarks. Co-authored and led the tiger team in the creation of a comprehensive Advanced Intelligence Engine best practice guide.Earned certifications in Project +."
            },
            {
                title: "Enterprise Consulting Lead, Professional Services",
                location: "Boulder, CO",
                description: "Led team that designed, operated, and scaled Security Operations Centers for large enterprise customers. Overcame some of the company's toughest projects through carefully crafted solution architectures. Provided team management, mentorship, training, and guidance.",
                achievements: "Successfully led LogRhythm's largest enterprise deployment consisting of more than 30 Data Indexers, 28 Data processors, 4 Platform Managers, 4 Event Managers, 4 Advance Intelligence Engines(AIE), 4 Metadata, 4 Archival, and 4 Network Monitor servers over the course of a year, reaching record-breaking 100k and 150k Messages Per Second(MPS) ingestion benchmarks. Significantly reduced correlation gaps in Advanced Intelligence Engine for customers exceeding 90k MPS limit by developing a framework for routing events to the proper Engine on a per use-case basis. Invented the Data Dictionary to help customers categorize parsed metadata from hundreds of supported logging sources. Created the TTL Projection Tool to calculate storage usage and requirements based on logging rates and average log sizes. Developed and published the Alarm Best Practices Database and playbooks for alarms a customer may receive."
            }
        ]
    },
    {
        name: "Fishnet Security Inc",
        timeFrame: "July 2012-October 2014",
        jobs: [
            {
                title: "Enterprise SIEM Engineer",
                location: "Overland Park, KS",
                description: "Administration, onboarding, and security consulting for enterprise customers. Improved internal integration services and aided customers in implementing lasting change in their incident, security, and operational processes.",
                achievements: "Co-designed comprehensive SIEM/SOAR agnostic threat defense framework categorizing customer assets into groups for utilization in threat detection rules, reports, and filtering.  Successfully on-boarded over 12 enterprise SIEM customers each with different architectures, compliances, and use cases. Earned 2 certifications in LogRhythm."
            },
            {
                title: "Enterprise Escalations Engineer",
                location: "Overland Park, KS",
                description: "Supported enterprise customers with a multitude of perimeter security products including high performance firewalls, proxies, VPNs, and endpoint security.",
                achievements: "Became the sole crossbeam expert and well-known for firewall kernel debugging expertise. Earned 11 industry leading certifications: CISSP, MCSA, MCSE, CCNA, CNSA, CNSE, BCCPA, BCCPP, CCSA, CCSE, and CCMSE."
            }
        ]
    },
    {
        name: "Pro Air Inc",
        timeFrame: "Jan 2011-Mar 2012",
        jobs: [
            {
                title: "Network Security Administrator",
                location: "Olathe",
                description: "Small Business Network and Security Administration while attending night school for cyber security.",
                achievements: "Graduated New Horizon's Cyber Defender Specialty Bootcamp and earned a large number of prestigious industry certifications."
            }
        ]
    },
    {
        name: "USMC",
        timeFrame: "Mar 2007-Aug 2010",
        jobs: [
            {
                title: "Operations Manager, Systems Administration",
                location: "Miramar, CA",
                description: "Led a team of systems and network administrators deploying and managing military data systems.",
                achievements: "Earned two Colonel's coins for leading the successful deployment of Service Pack 26 across the west coast. First cross-regional HA over SIPRnet VPNs in over four years. Awarded Honor Graduate, Top of Class, Iron Man, and Meritorious MAST."
            }
        ]
    }
]

class Resume extends Component {
    render() {
        return (
            <Layout>
                <div className={styles['body-container']}>
                    <div className={`${styles['banner']} ${styles['gradient-bg']}`}>
                        <div className={styles['banner-content']}>
                            <p className={`${styles['banner-txt-pad']} ${styles['banner-name']}`} /*style={bannerTopPad}*/>{MY_NAME}</p>
                            <p className={`${styles['banner-txt-pad']} ${styles['banner-title']}`}>{MY_TITLE}
                            </p>
                            <div className={styles['banner-img']} /*style={bannerBtmPad}*/>
                                <div>
                                    <Link className={styles['resume-link']} to={MY_EMAIL}>
                                        <img className={styles['resume-img']} src={EmailIcon} alt="email icon"></img>
                                    </Link>
                                    <br></br>
                                </div>
                                <div>
                                    <Link className={styles['resume-link']} to="https://jamesclair.github.io/">
                                        <img className={styles['resume-img']} src={Globe} alt="website icon"></img>
                                    </Link>
                                    <br></br>
                                </div>
                                <div>
                                    <Link className={styles['resume-link']} to="https://www.linkedin.com/in/jamesclair">
                                        <img className={styles['resume-img']} src={Linkedin} alt="github icon"></img>
                                    </Link>
                                    <br></br>
                                </div>
                                <div>
                                    <Link className={styles['resume-link']} to="https://github.com/jamesclair">
                                        <img className={styles['resume-img']} src={Github} alt="github icon"></img>
                                    </Link>
                                    <br></br>
                                </div>
                                <div>
                                    <Link className={styles['resume-link']} to="tel:19136459996">
                                        <img className={styles['resume-img']} src={BannerImg} alt="telephone icon"></img>
                                    </Link>
                                    <br></br>
                                </div>
                            </div >
                        </div >
                    </div >
                    <div className={styles['txt-pad']}>
                        <p className={`${styles['summary']}`}>
                            {MY_SUMMARY}
                        </p>
                        <h4 className={`${styles['gradient-bg']} ${styles['section-header']}`}>{PRO_EXP_HEADER}</h4>

                        {companies.map((company, companyIndex) => (
                            <div key={companyIndex} className={styles['p-company']}>
                                <div className={styles['spaced-between']}>
                                    <h6 className={styles['exp-header']}>
                                        {company.name}
                                    </h6>
                                    <p className={styles['exp-header']}>
                                        {company.timeFrame}
                                    </p>
                                </div>

                                {company.jobs.map((job, jobIndex) => (
                                    <p key={jobIndex} className={styles['p-job']}>
                                        <strong>{job.title}</strong>
                                        <br />
                                        {job.description}&nbsp;&nbsp;{job.achievements}
                                        <br />
                                    </p>
                                ))}
                            </div>
                        ))}

                        <h4 className={`${styles['gradient-bg']} ${styles['section-header']}`}>Skills</h4>
                        <p>
                            <strong>Development:</strong> Data Modeling/Ingestion/Processing, Data Storage/Retrieval/Reporting/Analytics, REST APIs, Relational/Non-Relational Datastores, Enterprise Integration Patterns, Test-Driven Dev, Domain-Driven Design, Event-Driven Architectures, Data Mesh Architecture, Kubernetes Operator Dev, CI/CD, Typed Object-Oriented Languages, Self-Service Infra, AuthN & AuthZ Svc(s), 12-Factor App, Bug Mgmt, Refactoring, Mono-Repo Design, Trunk-based Dev, System Design, Infra & Policy As Code, SLA/SLO/SLI Definition, Config Mgmt, Data Structures & Algorithms
                            <br></br>
                            <strong>Operations:</strong> Relational/Non-Relational Datastores, Customer Support, Alarm/Log/Event/Metric Mgmt, Container Orchestration, Technical Docs, Domain & Layer 1-7 Network Design, Risk Mgmt, Business Intelligence, Object & Block Distributed Storage, Cost Optimization, VPN/Proxy Admin, HA/DR Planning, Scaled Agile Framework, Capacity Planning, Team & Technical Leadership
                            <br></br>
                            <strong>Security:</strong> Threat Intelligence, Vulnerability Mgmt, Domain & Network Security, Security Analytics, Dark-Site Mgmt, Federated AuthN & AuthZ, PKI Mgmt, Zero Trust Architecture, Compliance Mgmt (HIPAA,SOC2,FIPS,PCI,NIST CSF/800-53,ISO 27001), Secrets Mgmt, Static & Run-time Analysis
                        </p>
                        <h4 className={`${styles['gradient-bg']} ${styles['section-header']}`}>Tools</h4>
                        <p>
                            <strong>Languages & Frameworks:</strong> Python, SQL, JavaScript, Bash, Django, Celery, Java, React, Golang, KubeBuilder, Yeoman, FastAPI, Maven, Quarkus, RegEx, Lucene, PromQL, EJS, Jinja, Kustomize, YAML, XML, HTML, CSS, JSON, CSV, C++, Powershell, GitHub, GitLab

                            <br></br>
                            <strong>Data & Secrets Management:</strong> PostgreSQL, Elasticsearch, Opensearch, AWS S3, Kafka, Flink, Vault, External Secrets, Etcd, SQL Server, AWS Redshift, Snowflake, Github Secrets, Raft, Consul, LogRhythm AIE, GoPass, Oracle, Excel
                            <br></br>
                            <strong>Infrastructure & Orchestration:</strong> Kubernetes, Crossplane, AWS(EKS, EC2, Lambda, ECR, ControlTower), ArgoCD, Terraform, Argo Workflows, Kops, Docker, GitHub Actions, Linux, Git, Veracode, Sonarqube, Ansible, Salt, Rundeck, GCP, Windows, SAMBA, VMWare
                            <br></br>
                            <strong>Networking & Security:</strong> Istio, AWS(ELB, VPC, Route53, IAM, Security Groups, SSO), Keycloak, Okta, Pomerium, Certificates Manager, HAProxy, Apache HTTP, Palo Alto, BlueCoat, Checkpoint, F5, Cisco, Wireshark
                            <br></br>
                            <strong>Monitoring & Logging:</strong> Grafana, Prometheus, AWS Cloudwatch, Sentry, StatsD, LogRhythm, Loki, Jaeger, Kiali, AWS Cloudtrail, Sysdig, Status Page, InfluxDB, Telegraf, pager duty, slack
                        </p >
                        <h4 className={`${styles['gradient-bg']} ${styles['section-header']}`}>Education & Training</h4>
                        <Container fluid>
                            <Row>
                                <Col className={styles['column']} md>
                                    <div><strong>Western Governor's University</strong> - Bachelor's Degree in Computer Science</div>
                                    <div><strong>Udemy</strong> - Data Science Bootcamp</div>
                                    <div><strong>Coursera</strong> - Architecting w / GCP</div>
                                </Col>
                                <Col className={styles['column']} md>
                                    <div><strong>New Horizons Kansas City</strong> - Cyber Defender Specialty Bootcamp</div>
                                    <div><strong>U.S. Marine Corps</strong> - Tactical Data Systems Administration School</div>
                                </Col>
                            </Row>
                        </Container>

                        <h4 className={`${styles['gradient-bg']} ${styles['section-header']}`}>Certifications</h4>
                        <Container fluid>
                            <Row>
                                <Col className={styles['column']} sm>
                                    <div>CISSP</div>
                                    <div>ITIL Service Mgmt</div>
                                    <div>Microsoft MCSA & MCSE</div>
                                    <div>Project +</div>
                                    <div>Oracle SQL Assoc</div>
                                </Col>
                                <Col className={styles['column']} sm>
                                    <div>CISCO CCNA</div>
                                    <div>DevOps Foundations</div>
                                    <div>CIW HTML5 / CSS3</div>
                                    <div>Net +</div>
                                    <div>A +</div>
                                </Col>
                                <Col className={styles['column']} sm>
                                    <div>Palo Alto CNSE & CNSA</div>
                                    <div>Bluecoat BCCA & BCCP</div>
                                    <div>Checkpoint CCMSE & CCSA & CCSE</div>
                                    <div>LogRhythm LCDE & LCP</div>
                                    <div>Tactical Data Systems Admin</div>
                                </Col>
                            </Row>
                        </Container>

                        <h4 className={`${styles['gradient-bg']} ${styles['section-header']}`}>Authored Works</h4>
                        <Container fluid>
                            <Row>
                                <Col className={styles['column']} lg>
                                    <div><Link className={styles['resume-link']} to="https://github.com/jamesclair/portfolio/blob/main/docs/EventProcessingServiceArchitecure.md">EventProcessingServiceArchitecure.md</Link></div>
                                    <div><Link className={styles['resume-link']} to="https://github.com/jamesclair/portfolio/blob/main/docs/OLAP_OLEP_OLTP_And_DataMeshes.md">OLAP_OLEP_OLTP_And_DataMeshes.md</Link></div>
                                    <div><Link className={styles['resume-link']} to="https://docs.logrhythm.com/devices/docs/syslog-splunk">Splunk Integration Guide</Link></div>
                                    <div><Link className={styles['resume-link']} to="https://docs.logrhythm.com/deploy/7.15.0/logrhythm-reference-architecture#id-(7.15.0)LogRhythmReferenceArchitecture-GoogleCloudPlatformReferenceArchitecture">LRCloud Original Reference Architectures</Link></div>
                                </Col>
                                <Col className={styles['column']} lg>
                                    <div><Link className={styles['resume-link']} to="https://docs.logrhythm.com/kbmodules/docs/logrhythm-diagnostic-module-user-guide">Alarm Best Practices Database and Guide</Link></div>
                                    <div><Link className={styles['resume-link']} to="https://docs.logrhythm.com/lrsiem/7.15.0/federal-information-processing-standards-fips">Federal Information Processing Standards (FIPS)</Link></div>
                                    <div><Link className={styles['resume-link']} to="https://community.logrhythm.com/t5/Training-and-Reference/Custom-STIX-TAXII-Threat-Provider-feeds/ta-p/20051">Custom STIX /TAXII Threat Provider feeds</Link></div>
                                </Col>
                                <Col className={styles['column']} lg>
                                    <div><Link className={styles['resume-link']} to="https://docs.logrhythm.com/kbmodules/docs/logrhythm-diagnostic-module-user-guide">LogRhythm Diagnostic Module User Guide</Link></div>
                                    <div><Link className={styles['resume-link']} to="https://docs.logrhythm.com/deploy/7.15.0/install-a-logrhythm-ha-dr-combined-solution">Install a LogRhythm HA + DR Combined Solution</Link></div>
                                    <div><Link className={styles['resume-link']} to="https://community.logrhythm.com/t5/user/viewprofilepage/user-id/1637">184 posts and 24 solutions LR Community</Link></div>
                                </Col>
                            </Row>
                        </Container>

                        <h4 className={`${styles['gradient-bg']} ${styles['section-header']}`}>Projects</h4>
                        <Container fluid>
                            <Row>
                                <Col className={styles['column']} md>
                                    <div><Link className={styles['resume-link']} to="https://github.com/jamesclair/jamesclair.github.io">Portfolio Website</Link></div>
                                    <div><Link className={styles['resume-link']} to="https://github.com/jamesclair/ML_Game_Sales_Forecasting">ML Game Sales Prediction</Link></div>
                                    <div><Link className={styles['resume-link']} to="https://github.com/jamesclair/DeliveryPathFinder">Dijkstra's Delivery Path Finder</Link></div>
                                </Col>
                                <Col className={styles['column']} md>
                                    <div><Link className={styles['resume-link']} to="https://github.com/jamesclair/TerraformNginxHADemo">TerraformNginxHADemo</Link></div>
                                    <div><Link className={styles['resume-link']} to="https://github.com/jamesclair/PokemonsterClientAndAPI">PokemonsterClientAndAPI</Link></div>
                                    <div><Link className={styles['resume-link']} to="https://github.com/jamesclair/CareerAdvisorBot">AI Career Advice Chatbot</Link></div>
                                </Col>
                                <Col className={styles['column']} md>
                                    <div><Link className={styles['resume-link']} to="https://github.com/jamesclair/TeamScheduler">Team Scheduler</Link></div>
                                    <div><Link className={styles['resume-link']} to="https://github.com/jamesclair/InventorySystem">Inventory System</Link></div>
                                    <div><Link className={styles['resume-link']} to="https://github.com/jamesclair/StudentRoster">Student Roster</Link></div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <br></br>
                    <br></br>

                </div >
            </Layout >
        )
    }
}

export default Resume