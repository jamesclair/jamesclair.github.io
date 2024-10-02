import * as React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { useTheme, useMediaQuery, Typography } from '@mui/material';


import TerminalIcon from '@mui/icons-material/Terminal';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MediationIcon from '@mui/icons-material/Mediation';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import WarningIcon from '@mui/icons-material/Warning';
import FoundationIcon from '@mui/icons-material/Foundation';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

import { styled } from '@mui/system';
import styles from './timeline.module.css'

import Layout from './layout';


const StyledTimelineDot = styled(TimelineDot)(({ theme }) => ({
    backgroundImage: 'linear-gradient(to bottom, #b588fc, #a891ff, #9b99ff, #91a1ff, #88a7ff, #7cb0ff, #73b8ff, #6fc0ff, #68cbff, #66d6ff, #6ce0ff, #77eafd)',
    borderStyle: 'none',
    padding: '8px',
}));

interface careerEvent {
    title: string;
    yearStart: string; // would be better as a date/time object
    yearEnd: string;
    desc: string;
    icon: React.ReactNode
}

var careerEvents: careerEvent[] = [
    {
        title: "Horizon3 Environment Lifecycle Manager (h3env)",
        yearStart: "2024",
        yearEnd: "",
        desc: "Developed a Python client to manage platform environments, automating and stitching workflows including Crossplane, ArgoCD, Argo Workflows, and GitLab CI/CD improving bootstrap, updates, teardowns, rebuilds, and administrative tasks. This integration streamlined environment management, enabling cohesive and efficient operations across both commercial and government(FedRamp) static and ephemeral platforms.",
        icon: <TerminalIcon htmlColor='black' />
    },
    {
        title: "Horizon3 Improvement Proposals Process (HIP)",
        yearStart: "2024",
        yearEnd: "",
        desc: "Established an engineering-wide process to foster cross-team collaboration on impactful changes to H3 products and interfaces, providing a repeatable framework for driving alignment and execution across teams.",
        icon: <LightbulbIcon htmlColor='black' />
    },
    {
        title: "Horizon 3 Fleet to ArgoCD Migration",
        yearStart: "2024",
        yearEnd: "",
        desc: "Migrated over 30 Kubernetes workloads from Fleet to ArgoCD, refactoring workload definitions to reduce duplication, prevent drift, and improve readability. The migration included operational services like Istio, OpenSearch, and Argo Workflows, along with critical services supporting on-demand customer ephemeral Autonomous Penetration Testing platforms and clusters, ensuring smoother deployments and improved infrastructure management.",
        icon: <MoveUpIcon htmlColor='black' />
    },
    {
        title: "Certified Kubernetes Administrator (CKA)",
        yearStart: "2024",
        yearEnd: "",
        desc: "After years of managing Kubernetes clusters in diverse environments, I earned my CKA certification. It was one of the more challenging certifications among the 20+ I've completed, but well worth it. I'm already preparing for the next one.",
        icon: <WorkspacePremiumIcon htmlColor='black' />
    },
    {
        title: "Select Star Scalable Asynchronous Data Ingestion",
        yearStart: "2023",
        yearEnd: "2024",
        desc: `Led the overhaul of the ingestion service for large-scale customers, reworking the Celery worker architecture to asynchronously retrieve 100,000-log batches from large data warehouses and save them to pluggable storage like S3. This cut ingestion times from 5 minutes to under 20 seconds, boosting throughput and reducing system impact. The new architecture eliminated multi-day job failures by enabling recovery from previously collected batches.  Persisted batches could be replayed to quickly reproduce errors without impacting customers. Decoupling ingestion from downstream processes increased fault tolerance and enabled parallel processing, reducing recovery times from days to seconds and scaling to millions of logs daily.`,

        icon: <MediationIcon htmlColor='black' />
    },
    {
        title: "Select Star Multiple Parsing Engine Support",
        yearStart: "2023",
        yearEnd: "2024",
        desc: `Refactored and modernized the data lineage and query parsing pipeline using Python, PyO3 for Rust, and Django, orchestrated with Kubernetes and Celery. The focus was on improving flexibility, maintainability, and support for complex queries across multiple engines, including proprietary and external sources like Snowflake. We introduced a new batch processing module to streamline new parsers and reduce code duplication. By enforcing schema throughout the pipeline, we enriched lineage tracking and improved troubleshooting. The refactor followed SOLID object oriented design principles, reducing technical debt while maintaining performance and avoiding downtime, resulting in a scalable and reliable solution.`,

        icon: <AccountTreeIcon htmlColor='black' />
    },

    {
        title: "Select Star Web Page Load Time Optimizations",
        yearStart: "2023",
        yearEnd: "",
        desc: `Achieved up to 700% load-time optimization on multiple nearly unusable web pages backed by a Django API and ORM, vastly improving the user experience. Profiled and optimized SQL queries for large datasets, resolving issues such as n+1 queries, inefficient recursive select statements, and missing or excessive indexing.`,

        icon: <FlashOnIcon htmlColor='black' />
    },
    {
        title: "Select Star Next-Gen Data Pipeline Design Foundations",
        yearStart: "2023",
        yearEnd: "",
        desc: `Developed initial designs for a next-gen scalable data pipeline architecture, leveraging data mesh principles and drawing on experience with high-volume, high-velocity event streaming and analytics pipelines like LogRhythm Axon. The designs supported both real-time and batch data processing, laying the foundation for scalable, flexible handling of diverse data workloads.`,

        icon: <ArchitectureIcon htmlColor='black' />
    },
    {
        title: "Solv Unified Development Provisioning",
        yearStart: "2023",
        yearEnd: "",
        desc: `Created an extensible, native and container-based unified development environment with Bash, Docker Compose, and Just, streamlining onboarding and daily work for Solv developers. By standardizing tools and processes, the solution enabled faster development and onboarding while fostering best practices and paving the way for next-gen services. Workflows mirrored production environments, minimizing unexpected bugs and behaviors.`,

        icon: <FoundationIcon htmlColor='black' />
    },
    {
        title: "Solv Long Integration Job Sentry Cron Alerts",
        yearStart: "2023",
        yearEnd: "",
        desc: `Implemented Sentry Cron alerts to monitor long-running integration jobs, proactively detecting performance bottlenecks and reducing downtime by addressing failures or delays in real time. Enhanced system reliability and workflow efficiency by setting up notifications for job anomalies, enabling quick issue resolution before business operations were impacted. Leveraged Sentry's detailed error tracking to diagnose and resolve problems more efficiently, improving overall system performance and transparency.`,

        icon: <VisibilityIcon htmlColor='black' />
    },
    {
        title: "Previous Timeline Under Construction",
        yearStart: "2007-2023",
        yearEnd: "",
        desc: `Please check back soon for a full timeline of projects and experiences, including LogRhythm Axon, my AI capstone for my Bachelor's degree, and LRCloud—key initiatives I've had the opportunity to contribute to over my 20-year career!`,

        icon: <WarningIcon htmlColor='black' />
    },

]



export default function CustomizedTimeline() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Layout>
            <Timeline sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: isSmallScreen ? 0.2 : 1,
                },
                color: 'lightgray'
            }} position={isSmallScreen ? 'right' : 'alternate'}>
                {careerEvents.map((careerEvent, careerIndex) => (
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                        >
                            {`${careerEvent.yearStart}${careerEvent.yearEnd ? ' - ' + careerEvent.yearEnd : ''}`}
                        </TimelineOppositeContent>
                        <TimelineSeparator >
                            <TimelineConnector />
                            <StyledTimelineDot>
                                {careerEvent.icon}
                            </StyledTimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '6px', px: 2 }}>
                            <Typography variant="h6" component="span" style={{ backgroundImage: 'linear-gradient(to right, #b588fc, #a891ff, #9b99ff, #91a1ff, #88a7ff, #7cb0ff, #73b8ff, #6fc0ff, #68cbff, #66d6ff, #6ce0ff, #77eafd)', color: 'transparent', backgroundClip: 'text' }}>
                                {careerEvent.title}
                            </Typography>
                            <Typography className={styles['typography-career-event-desc']}>{careerEvent.desc}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}

            </Timeline>
        </Layout >

    );
}