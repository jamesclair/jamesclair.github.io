---
title: "A Deep Dive Into OL* Databases and Data Mesh: Understanding Their Strengths and My Journey"
---

#  {{ $frontmatter.title }}

In the world of data management, databases are designed with specific use cases in mind. Two of the most commonly used types of databases are OLAP (Online Analytical Processing) and OLTP (Online Transaction Processing). Each of these databases serves a unique purpose and has strengths that make them ideal for different scenarios. In this article, we’ll explore what OLAP and OLTP databases are, how they differ, and reflect on my own experience working with these technologies.

## What is OLAP?

An OLAP database is optimized for complex queries and reporting on large datasets. OLAP systems are typically designed to handle multidimensional data, often visualized in a cube format. This approach allows for fast retrieval of data and is particularly useful for generating reports, analyzing trends, and summarizing vast amounts of data.

The two most common ways to organize data in an OLAP system are through Star and Snowflake schemas. Let’s break them down:

### The Star Schema

The Star schema is designed to reduce the number of large tables by arranging them in a star-shaped layout. At the center is a Fact table, which holds numerical data such as totals, averages, or counts. This table also contains foreign keys pointing to the Dimension tables—the points of the star. These Dimension tables describe various aspects or entities relevant to the data, such as customers, products, or time periods.

Star schemas are highly efficient for reading data and generating reports. Because the Dimension tables are denormalized (i.e., redundant data is stored to avoid complex joins), the system is optimized for performance. This makes Star schemas ideal for large-scale data warehouses where querying and reporting are critical.

However, there are trade-offs. As Dimension tables grow, query performance may degrade. There can also be issues with duplicate data when dimensions overlap or share attributes. Moreover, the quantitative data in the Fact table can become complex to aggregate or calculate efficiently.

### The Snowflake Schema

The Snowflake schema takes the Star schema a step further by normalizing the Dimension tables. In this design, each Dimension is broken down into sub-dimensions, which creates a more complex data model. This normalization reduces data duplication and increases storage efficiency, but it comes at the cost of requiring more complex queries and joins.

The Snowflake schema is especially useful when dealing with intricate relationships between dimensions or when storage efficiency is a high priority. However, this added complexity can make it harder to maintain and manage compared to a Star schema.

Both schema types are designed with a common goal: fast data retrieval. OLAP databases are therefore ideal for reporting use cases on large datasets, such as in a data warehouse, where quick access to summarized data is essential.

## What is OLTP?

On the other hand, OLTP databases are optimized for transaction-heavy environments. These systems handle high volumes of small, frequent transactions, such as processing customer orders, updating account information, or recording user actions. OLTP systems are designed for writes, ensuring strong consistency and integrity of the data.

Unlike OLAP databases, OLTP systems are typically single-dimensional, focusing on individual data points rather than aggregating or analyzing large datasets. Each table row represents a specific entity, and the columns represent attributes of that entity. The data is often normalized to avoid redundancy and to optimize storage efficiency, although denormalization may be used in some cases to improve performance.

Because OLTP systems usually deal with smaller datasets, they can afford to prioritize write performance and consistency over read optimization. They are the backbone of everyday applications, from banking systems to e-commerce platforms.

## My Experience with OLTP and OLAP Databases

Over the course of my career, I’ve had extensive experience working with both OLTP and OLAP systems.

OLTP Systems: Early Experiences
Most of my experience has been with OLTP databases, both relational and non-relational, in environments where real-time data was critical. I worked with systems that stored data from user interactions, such as customer account updates, access logs, and API requests.

However, I faced challenges when attempting to use OLTP databases for read-heavy workloads at scale. For example, when I worked with LogRhythm’s on-premises data product, we experienced significant scaling and partition maintenance issues when trying to handle vast amounts of log data. To address this, we transitioned to using Elasticsearch/OpenSearch, a non-relational backend designed for log data. This allowed us to scale our system from handling 90,000 messages per second (MPS) to 300,000 MPS over time.

By leveraging a tiered storage system—hot, warm, and cold storage—we were able to balance the need for heavy writes and long-term data retention. Hot storage provided quick access to frequently used data, while cold storage, hosted on cheaper storage engines like Amazon S3, was ideal for long-term archival. This architecture allowed us to maintain performance and keep reporting capabilities intact while managing large amounts of time-series data.

## Evolving into Data Mesh

Later in my career, I was involved in rebuilding LogRhythm’s core product, where we implemented a data mesh architecture. This allowed us to create OLTP and Online Event Processing (OLEP) systems tailored to specific domain services, all within a microservice architecture. By utilizing self-service databases in PostgreSQL, we could isolate and scale databases for each service independently. This flexible architecture gave us the ability to create centralized data lakes, event buses, and analytics engines that could scale on a per-customer basis.

In my opinion, a data mesh approach provides far greater flexibility, scalability, and maintainability compared to a monolithic data warehouse with an overloaded schema. While OLAP schemas are useful for specific use cases, data meshes can be iteratively built to support a wide range of use cases with a more modular approach.

### Recent Experience with OLAP: Snowflake and Redshift

In recent years, I’ve gained hands-on experience working with OLAP databases implemented in Snowflake and Redshift, particularly during my time at Select Star. These platforms offer powerful data models for archiving, reporting, and analytics. I was able to see first-hand how these architectures could support integrated data lineages, complex reporting services, and large-scale analytics use cases.

That said, I still stand by my belief that a well-designed data mesh architecture offers a superior solution for building a scalable, robust, and maintainable system. By combining the best features of OLAP, OLTP, and OLEP models, data meshes can provide a more flexible and future-proof approach to handling diverse data workloads.

## Conclusion

Both OLAP and OLTP databases have their strengths and are designed for different purposes. OLAP databases excel at handling large datasets and optimizing for read-heavy workloads, while OLTP systems are built for fast transactions and high write volumes. In my experience, combining the strengths of both through innovative architectures like data meshes can provide the best of both worlds, offering scalability, flexibility, and performance.