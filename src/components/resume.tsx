import { Component } from 'react';
import { Link } from 'react-router-dom'
import Layout from './layout'
import styles from './resume.module.css'
import BannerImg from './img/telephone.svg'
import Email from './img/email.svg'
import Globe from './img/globe.svg'
import Github from './img/github.svg'
import Linkedin from './img/linkedin.svg'

class Resume extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <div className={styles['banner gradient-bg']}>
                        <div className={styles['banner-content']}>
                            <p className={styles['banner-txt-pad banner-name']}>James Clair</p>
                            <p className={styles['banner-txt-pad banner-title']}>Distributed Software and Enterprise Infrastructure Engineer
                            </p>
                            <div className={styles['banner-img']}>
                                <p>
                                    <Link to="tel:19136459996">
                                        <img src={BannerImg} alt="telephone icon"></img>
                                    </Link>
                                    <br></br>
                                </p>
                                <p>
                                    <Link to="mailto:clair.james88@gmail.com">
                                        <img src={Email} alt="email icon"></img>
                                    </Link>
                                    <br></br>
                                </p>
                                <p>
                                    <Link to="https://jamesclair.github.io/">
                                        <img src={Globe} alt="website icon"></img>
                                    </Link>
                                    <br></br>
                                </p>
                                <p>
                                    <Link to="https://github.com/jamesclair">
                                        <img src={Github} alt="github icon"></img>
                                    </Link>
                                    <br></br>
                                </p>
                                <p>
                                    <Link to="https://www.linkedin.com/in/jamesclair">
                                        <img src={Linkedin} alt="github icon"></img>
                                    </Link>
                                    <br></br>
                                </p >
                            </div >
                        </div >
                    </div >

                    <p className={styles['summary txt-pad']}>
                        With 18 years of experience in software engineering, operations, and security, I specialize in microservice development, devops, finops, gitops, secops, observability, data intensive applications, distributed architecture and scalable cloud infrastructures. My extensive background in all aspects of modern enterprise software allows me to drive successful projects and mentor teams to achieve excellence. Let me shape your next-gen architecture to unlock its full potential.
                    </p>

                    <table aria-label="Skills, Tools, Education, and Certifications">
                        <tr className={styles['gradient-bg']}>
                            <th scope="col">Skills</th>
                            <th scope="col">Tools</th>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <strong>Development:</strong> Data Modeling/Ingestion/Processing, Data Storage/Retrieval/Reporting/Analytics, REST APIs, Relational/Non-Relational Datastores, Enterprise Integration Patterns, Test-Driven Dev, Domain-Driven Design, Event-Driven Architectures, Data Mesh Architecture, Kubernetes Operator Dev, CI/CD, Typed Object-Oriented Languages, Self-Service Infra, AuthN & AuthZ Svc(s), 12-Factor App, Bug Mgmt, Refactoring, Mono-Repo Design, Trunk-based Dev, System Design, Infra & Policy As Code, SLA/SLO/SLI Definition, Config Mgmt, Data Structures & Algorithms
                                    <br></br>
                                    <strong>Operations:</strong> Relational/Non-Relational Datastores, Customer Support, Alarm/Log/Event/Metric Mgmt, Container Orchestration, Technical Docs, Domain & Layer 1-7 Network Design, Risk Mgmt, Business Intelligence, Object & Block Distributed Storage, Cost Optimization, VPN/Proxy Admin, HA/DR Planning, Scaled Agile Framework, Capacity Planning, Team & Technical Leadership
                                    <br></br>
                                    <strong>Security:</strong> Threat Intelligence, Vulnerability Mgmt, Domain & Network Security, Security Analytics, Dark-Site Mgmt, Federated AuthN & AuthZ, PKI Mgmt, Zero Trust Architecture, Compliance Mgmt (HIPAA,SOC2,FIPS,PCI,NIST CSF/800-53,ISO 27001), Secrets Mgmt, Static & Run-time Analysis
                                </p>
                            </td>
                            <td>
                                <p>
                                    <strong>Languages & Frameworks:</strong> Python, SQL, JavaScript, Bash, Django, Celery, Java, React, Golang, KubeBuilder, Yeoman, FastAPI, Maven, Quarkus, RegEx, Lucene, PromQL, EJS, Jinja, Kustomize, YAML, XML, HTML, CSS, JSON, CSV, C++, Powershell

                                    <br></br>
                                    <strong>Data & Secrets Management:</strong> PostgreSQL, Elasticsearch, Opensearch, AWS S3, Kafka, Flink, Vault, External Secrets, Etcd, SQL Server, AWS Redshift, Snowflake, Github Secrets, Raft, Consul, LogRhythm AIE, GoPass, Oracle, Excel
                                    <br></br>
                                    <strong>Infrastructure & Orchestration:</strong> Kubernetes, AWS(EKS, EC2, Lambda, ECR, ControlTower), Terraform, ArgoCD, Kops, Docker, GitHub Actions, Linux, Git, Veracode, Sonarqube, Ansible, Salt, Rundeck, GCP, Windows, SAMBA, VMWare
                                    <br></br>
                                    <strong>Networking & Security:</strong> Istio, AWS(ELB, VPC, Route53, IAM, Security Groups, SSO), Keycloak, Okta, Pomerium, Certificates Manager, HAProxy, Apache HTTP, Palo Alto, BlueCoat, Checkpoint, F5, Cisco, Wireshark
                                    <br></br>
                                    <strong>Monitoring & Logging:</strong> Grafana, Prometheus, AWS Cloudwatch, Sentry, StatsD, LogRhythm, Loki, Jaeger, Kiali, AWS Cloudtrail, Sysdig, Status Page, InfluxDB, Telegraf, pager duty, slack
                                </p >
                            </td >
                        </tr >
                        <tr className={styles[' gradient-bg']}>
                            <th scope="col">Education & Training</th>
                            <th scope="col">Certifications</th>
                        </tr>
                        <tr>
                            <td>
                                <strong>Western Governor's University</strong>-Bachelor's Degree in Computer Science
                                <br></br>
                                <strong>Udemy</strong>-Data Science Bootcamp
                                <br></br>
                                <strong>Coursera</strong>-Architecting w / GCP
                                <br></br>
                                <strong>New Horizons Kansas City</strong>-Cyber Defender Specialty Bootcamp
                                <br></br>
                                <strong>U.S. Marine Corps</strong>-Tactical Data Systems Administration School
                                <br></br>
                            </td>
                            <td>
                                CISSP, ITIL Service Management, Microsoft MCSA & MCSE, Project+, Oracle SQL Assoc, CISCO CCNA. DevOps Foundations, CIW HTML5/CSS3, Net+, A+, Palo Alto CNSE & CNSA, Bluecoat BCCA & BCCP, Checkpoint CCMSE & CCSA & CCSE, LogRhythm LCDE & LCP, Marines Tactical Data Systems Administrator
                            </td>
                        </tr>
                    </table>

                    <h2 className={styles['gradient-bg txt-pad']}>Professional Experience</h2>

                    <div className={styles['txt-pad spaced-between']}>
                        <h3 className={styles['exp-header']}>Senior Platform Software Engineer-Select Star (Remote)
                        </h3>
                        <p className={styles['exp-header']}>Jul 2023-Jan 2024</p>
                    </div>

                    <p className={styles['txt-pad']}>Designing, refactoring, building, securing, and supporting enterprise pipeline and platform with a focus on collection, ingestion, processing, and analysis of data warehouse and business intelligence data.
                        <br></br>
                        <span className={styles['achievements-header']}>Achievements:</span> Enabled asynchronous and parallel data collection and ingestion.Improved pipeline testability by adding an ingested batch persistence layer.Introduced the ability to combine multiple parsing engines.Designed foundations of next-gen scalable data pipeline architecture.Up to 700 % load-time optimization of multiple web pages backed by SQL.
                        <br></br>
                    </p >

                    <div className={styles['txt-pad spaced-between']}>
                        <h3 className={styles['exp-header']}>Staff Integration Engineer-Solv (Remote)
                        </h3>
                        <p className={styles['exp-header']}>Feb 2023-Jun 2023</p>
                    </div>
                    <p className={styles['txt-pad']}>Led and mentored team in new greenfield development foundations to create a cost-effective and scalable integration platform.
                        <br></br>
                        <span className={styles['achievements-header']}>Achievements:</span> Created unified provisioning bootstrap to serve as the foundations of next generation platform.Partner refactor of Athena scheduling api integrations.Introduced Sentry Cron alerting for long running integration jobs.
                    </p >

                    <div className={styles['txt-pad spaced-between']}>
                        <h3 className={styles['exp-header']}>Tech Lead, Platform Engineering-LogRhythm (Remote/Boulder, CO)</h3>
                        <p className={styles['exp-header']}>October 2014-Sep 2022</p>
                    </div>
                    <p className={styles['txt-pad']}>Created, led, and mentored a team of highly skilled engineers while researching, designing, and implementing industry best practice tools and frameworks. Building a cost-effective, highly available and scalable, multi-tenant platform, pipeline, and infrastructure supporting up to a million messages per second.
                        <br></br>
                        <span className={styles['achievements-header']}>Achievements:</span> Led the technical development of infrastructure for the new Axon cloud-native platform over 3.5 years with a public launch in early 2022. Developed comprehensive Kubernetes Operators for OpenSearch, Flink, and LogRhythm Microservices / Microfrontends.Created a high-performance multi-tenant data pipeline with enterprise service bus, self-serve domain-specific relational databases, central time-series, and tiered storage NoSQL database, and tenant-specific real-time analytics job clusters.Implemented fully secure and automated development golden paths for localdev and CI / CD.Automated creation, re-creation, and configuration of templated GitOps infrastructure as code environments and platforms.Full migration and integration of newly acquired Mistnet software into gold-standard CI / CD and platform.Providing best practice secure and public access to APIs and WebUIs through identity federated role-based access.Founded and staffed "Colossus of Cloud", a team of highly successful and skilled engineers.Earned my Bachelor's in Computer Science and completed the complete data science bootcamp on Udemy.
                        <br></br>
                        <strong>Cloud DevOps Engineer III</strong>
                        <br></br>
                        Served as LogRhythm product expert on the DevOps team while migrating LogRhythm's core services to a SAAS offering hosted on Google Cloud Platform.
                        <br></br>
                        <span className={styles['achievements-header']}>Achievements:</span> Developed de facto reference architecture and sizing guides for new cloud service offerings. Automated deployment of LogRhythm core services to Google Cloud Compute environment.Earned certifications in DevOps foundations, ITIL service management, Oracle SQL, and web development.
                        <br></br>
                        <strong>Global Technical Release Manager</strong>
                        <br></br>
                        Delivered software to customers and internal teams through the development of release consulting, documentation, feedback, User Acceptance Testing, and bug management.Served part-time as TierIV escalations engineer contributing improvements and fixes directly to the core product.
                        <br></br>
                        <span className={styles['achievements-header']}>Achievements:</span> Successfully revived and managed the Global Early Access Beta Program into across-organizational effort that incrementally introduced software releases while gaining early feedback and re-establishing customer trust.Developed FIPS, High Availability, and Disaster Recovery guides for new next-generation deployment architectures.Created Splunk Integration Guide allowing bulk exportation of data from Splunk to LogRhythm and easing the process of migration from our competitor.Co-rebuilt the Release Champion Program tripling internal content contributions, improving cross-organizational relationships, and chopping our release cycle down from 1 year to 6 months.Co-managed over 4 new product launches, 5 major and 23 minor releases.Authored Threat Intelligence Provider Service and LogRhythm SIEM to CloudAI integration guides. Continuously provided consultation and optimizations helping to scale beyond the 200k and 300k Messages Per Second benchmarks.Co-authored and led the tiger team in the creation of a comprehensive Advanced Intelligence Engine best practice guide.Earned certifications in Project +.
                        <br></br>
                        <strong>Enterprise Consulting Lead, Professional Services</strong>
                        <br></br>
                        Led team that designed, operated, and scaled Security Operations Centers for large enterprise customers. Overcame some of the company's toughest projects through carefully crafted solution architectures. Provided team management, mentorship, training, and guidance.
                        <br></br>
                        <span className={styles['achievements-header']}>Achievements:</span> Successfully led LogRhythm's largest enterprise deployment consisting of more than 30 Data Indexers, 28 Data processors, 4 Platform Managers, 4 Event Managers, 4 Advance Intelligence Engines(AIE), 4 Metadata, 4 Archival, and 4 Network Monitor servers over the course of a year, reaching record-breaking 100k and 150k Messages Per Second(MPS) ingestion benchmarks.Significantly reduced correlation gaps in Advanced Intelligence Engine for customers exceeding 90k MPS limit by developing a framework for routing events to the proper Engine on a per use -case basis.Invented the Data Dictionary to help customers categorize parsed metadata from hundreds of supported logging sources.Created the TTL Projection Tool to calculate storage usage and requirements based on logging rates and average log sizes.Developed and published the Alarm Best Practices Database and Guide to provide and maintain recommended steps for pre-defined alarms a customer may receive.
                    </p >

                    <div className={styles['txt-pad spaced-between']}>
                        <h3 className={styles['exp-header']}>Enterprise SIEM Engineer-Fishnet Security Inc (Overland Park, KS)
                        </h3>
                        <p className={styles['exp-header']}>July 2012-October 2014</p>
                    </div>
                    <p className={styles['txt-pad']}>
                        Administration, onboarding, and security consulting for enterprise customers. Improved internal integration services and aided customers in implementing lasting change in their incident, security, and operational processes.
                        <br></br>

                        <span className={styles['achievements-header']}>Achievements:</span> Co-designed comprehensive SIEM / tool agnostic threat defense framework categorizing customer assets into groups for utilization in threat detection rules, reports, and filtering.  Successfully on-boarded over 12 enterprise SIEM customers each with different architectures, compliances, and use cases.Earned 2 certifications in LogRhythm.
                        <br></br>
                        <strong>Enterprise Escalations Engineer</strong>
                        <br></br>
                        Supported enterprise customers with a multitude of perimeter security products including high performance firewalls, proxies, VPNs, and endpoint security.
                        <br></br>
                        <span className={styles['achievements-header']}>Achievements:</span> Became the sole crossbeam expert and well-known for firewall kernel debugging expertise. Earned 11 industry leading certifications: CISSP, MCSA, MCSE, CCNA, CNSA, CNSE, BCCPA, BCCPP, CCSA, CCSE, and CCMSE.
                    </p >
                    <div className={styles['txt-pad spaced-between']}>
                        <h3 className={styles['exp-header']}>Network Security Administrator-Pro Air Inc (Olathe, KS)
                        </h3>
                        <p className={styles['exp-header']}>Jan 2011-Mar 2012</p>
                    </div>
                    <p className={styles['txt-pad']}>
                        Small Business Network and Security Administration while attending night school for cyber security.
                        <br></br>
                        <span className={styles['achievements-header']}>Achievements:</span>Graduated New Horizon's Cyber Defender Specialty Bootcamp and earned a large number of prestigious industry certifications.
                    </p >
                    <div className={styles['txt-pad spaced-between']}>
                        <h3 className={styles['exp-header']}>Operations Manager, Systems Administration-USMC (Miramar, CA)
                        </h3>
                        <p className={styles['exp-header']}>Mar 2007-Aug 2010</p>
                    </div>
                    <p className={styles['txt-pad']}>
                        Led a team of systems and network administrators deploying and managing military data systems.
                        <br></br>
                        <span className={styles['achievements-header']}>Achievements:</span> Earned two Colonel's coins for leading the successful deployment of Service Pack 26 across the west coast.First cross-regional HA over SIPRnet VPNs in over four years.Awarded Honor Graduate, Top of Class, Iron Man, and Meritorious MAST.
                    </p >
                    <table aria-label="Projects and Authored Works">
                        <tr className={styles['gradient-bg']}>
                            <th scope="col">Authored Works</th>
                            <th scope="col">Projects</th>
                        </tr>
                        <tr>
                            <td>
                                <Link to="https://github.com/jamesclair/portfolio/blob/main/docs/EventProcessingServiceArchitecure.md">EventProcessingServiceArchitecure.md</Link>
                                <br></br>
                                <Link to="https://github.com/jamesclair/portfolio/blob/main/docs/OLAP_OLEP_OLTP_And_DataMeshes.md">OLAP_OLEP_OLTP_And_DataMeshes.md</Link>
                                <br></br>
                                <Link to="https://docs.logrhythm.com/devices/docs/syslog-splunk">Splunk Integration Guide (authored original version)</Link>
                                <br></br>
                                <Link to="https://docs.logrhythm.com/deploy/7.15.0/logrhythm-reference-architecture#id-(7.15.0)LogRhythmReferenceArchitecture-GoogleCloudPlatformReferenceArchitecture">LRCloud Original Reference Architectures</Link>
                                <br></br>
                                <Link to="https://docs.logrhythm.com/kbmodules/docs/logrhythm-diagnostic-module-user-guide">Alarm Best Practices Database and Guide</Link>
                                <br></br>
                                <Link to="https://docs.logrhythm.com/lrsiem/7.15.0/federal-information-processing-standards-fips">Federal Information Processing Standards (FIPS)</Link>
                                <br></br>
                                <Link to="https://community.logrhythm.com/t5/Training-and-Reference/Custom-STIX-TAXII-Threat-Provider-feeds/ta-p/20051">Custom STIX /TAXII Threat Provider feeds</Link>
                                <br></br>
                                <Link to="https://docs.logrhythm.com/kbmodules/docs/logrhythm-diagnostic-module-user-guide">LogRhythm Diagnostic Module User Guide</Link>
                                <br></br>
                                <Link to="https://docs.logrhythm.com/deploy/7.15.0/install-a-logrhythm-ha-dr-combined-solution">Install a LogRhythm HA + DR Combined Solution</Link>
                                <br></br>
                                <Link to="https://community.logrhythm.com/t5/user/viewprofilepage/user-id/1637">184 posts and 24 solutions LR Community (requires login)</Link>
                                <br></br>
                            </td >
                            <td>
                                <Link to="https://github.com/jamesclair/jamesclair.github.io">My Website</Link>
                                <br></br>
                                <Link to="https://github.com/jamesclair/ML_Game_Sales_Forecasting">ML Game Sales Prediction</Link>
                                <br></br>
                                <Link to="https://github.com/jamesclair/DeliveryPathFinder">Dijkstra's Delivery Path Finder</Link>
                                <br></br>
                                <Link to="https://github.com/jamesclair/TerraformNginxHADemo">TerraformNginxHADemo</Link>
                                <br></br>
                                <Link to="https://github.com/jamesclair/PokemonsterClientAndAPI">PokemonsterClientAndAPI</Link>
                                <br></br>
                                <Link to="https://github.com/jamesclair/CareerAdvisorBot">AI Career Advice Chatbot</Link>
                                <br></br>
                                <Link to="https://github.com/jamesclair/TeamScheduler">Team Scheduler</Link>
                                <br></br>
                                <Link to="https://github.com/jamesclair/InventorySystem">Inventory System</Link>
                                <br></br>
                                <Link to="https://github.com/jamesclair/StudentRoster">Student Roster</Link>
                            </td>
                        </tr>
                    </table >
                </div >
            </Layout >
        )
    }
}

export default Resume