const questions = [
    {
        "question": "Which annotation is used to mark a Spring Boot application entry point?",
        "answers": [
            {"text": "@SpringBootApplication", "correct": true},
            {"text": "@EnableAutoConfiguration", "correct": false},
            {"text": "@ComponentScan", "correct": false},
            {"text": "@Configuration", "correct": false}
        ]
    },
    {
        "question": "Which of the following is responsible for service discovery in microservices?",
        "answers": [
            {"text": "Spring Data JPA", "correct": false},
            {"text": "Eureka Server", "correct": true},
            {"text": "Spring Boot Actuator", "correct": false},
            {"text": "Spring Security", "correct": false}
        ]
    },
    {
        "question": "Which Spring Boot annotation loads application properties from the application.yml file?",
        "answers": [
            {"text": "@ConfigurationProperties", "correct": true},
            {"text": "@PropertySource", "correct": false},
            {"text": "@Value", "correct": false},
            {"text": "@EnableConfigurationProperties", "correct": false}
        ]
    },
    {
        "question": "Which pattern is most commonly used in microservices communication?",
        "answers": [
            {"text": "Monolithic", "correct": false},
            {"text": "Event-driven", "correct": true},
            {"text": "Layered", "correct": false},
            {"text": "MVC", "correct": false}
        ]
    },
    {
        "question": "Which of these is used to test Spring Boot REST endpoints?",
        "answers": [
            {"text": "@WebMvcTest", "correct": true},
            {"text": "@SpringBootTest", "correct": false},
            {"text": "@DataJpaTest", "correct": false},
            {"text": "@MockBean", "correct": false}
        ]
    },
    {
        "question": "Which annotation is used in JUnit to denote a test method?",
        "answers": [
            {"text": "@Test", "correct": true},
            {"text": "@RunWith", "correct": false},
            {"text": "@BeforeEach", "correct": false},
            {"text": "@AfterEach", "correct": false}
        ]
    },
    {
        "question": "Which dependency helps in creating RESTful web services in Spring Boot?",
        "answers": [
            {"text": "spring-boot-starter-web", "correct": true},
            {"text": "spring-boot-starter-data-jpa", "correct": false},
            {"text": "spring-boot-starter-test", "correct": false},
            {"text": "spring-boot-starter-security", "correct": false}
        ]
    },
    {
        "question": "What is the default embedded server used in Spring Boot?",
        "answers": [
            {"text": "Tomcat", "correct": true},
            {"text": "Jetty", "correct": false},
            {"text": "Undertow", "correct": false},
            {"text": "GlassFish", "correct": false}
        ]
    },
    {
        "question": "Which annotation is used to enable Feign clients in Spring Boot?",
        "answers": [
            {"text": "@EnableFeignClients", "correct": true},
            {"text": "@EnableDiscoveryClient", "correct": false},
            {"text": "@EnableWebMvc", "correct": false},
            {"text": "@EnableAutoConfiguration", "correct": false}
        ]
    },
    {
        "question": "Which testing framework is used by default in Spring Boot projects?",
        "answers": [
            {"text": "JUnit", "correct": true},
            {"text": "TestNG", "correct": false},
            {"text": "Mockito", "correct": false},
            {"text": "Hamcrest", "correct": false}
        ]
    },
    {
        "question": "In JUnit 5, which annotation is used before all tests are run?",
        "answers": [
            {"text": "@BeforeAll", "correct": true},
            {"text": "@BeforeEach", "correct": false},
            {"text": "@AfterAll", "correct": false},
            {"text": "@AfterEach", "correct": false}
        ]
    },
    {
        "question": "Which tool is used to route requests in microservices?",
        "answers": [
            {"text": "API Gateway", "correct": true},
            {"text": "Config Server", "correct": false},
            {"text": "Service Registry", "correct": false},
            {"text": "Database", "correct": false}
        ]
    },
    {
        "question": "Which Spring Cloud module is used for centralized configuration?",
        "answers": [
            {"text": "Spring Cloud Config", "correct": true},
            {"text": "Spring Cloud Gateway", "correct": false},
            {"text": "Spring Cloud Stream", "correct": false},
            {"text": "Spring Cloud Bus", "correct": false}
        ]
    },
    {
        "question": "Which library helps with mocking dependencies during unit tests?",
        "answers": [
            {"text": "Mockito", "correct": true},
            {"text": "Lombok", "correct": false},
            {"text": "Hibernate", "correct": false},
            {"text": "MapStruct", "correct": false}
        ]
    },
    {
        "question": "Which file contains dependencies for a Spring Boot project using Maven?",
        "answers": [
            {"text": "pom.xml", "correct": true},
            {"text": "build.gradle", "correct": false},
            {"text": "application.yml", "correct": false},
            {"text": "manifest.json", "correct": false}
        ]
    },
    {
        "question": "Which HTTP method is idempotent and used to update a resource?",
        "answers": [
            {"text": "PUT", "correct": true},
            {"text": "POST", "correct": false},
            {"text": "GET", "correct": false},
            {"text": "PATCH", "correct": false}
        ]
    },
    {
        "question": "Which annotation is used to test JPA repositories?",
        "answers": [
            {"text": "@DataJpaTest", "correct": true},
            {"text": "@WebMvcTest", "correct": false},
            {"text": "@RestControllerTest", "correct": false},
            {"text": "@IntegrationTest", "correct": false}
        ]
    },
    {
        "question": "Which database is often used for service registry in Spring Cloud?",
        "answers": [
            {"text": "Eureka Server", "correct": true},
            {"text": "PostgreSQL", "correct": false},
            {"text": "MongoDB", "correct": false},
            {"text": "MySQL", "correct": false}
        ]
    },
    {
        "question": "What is the default port for a Spring Boot application?",
        "answers": [
            {"text": "8080", "correct": true},
            {"text": "3000", "correct": false},
            {"text": "8000", "correct": false},
            {"text": "9090", "correct": false}
        ]
    },
    {
        "question": "Which annotation helps load the entire application context during testing?",
        "answers": [
            {"text": "@SpringBootTest", "correct": true},
            {"text": "@ContextConfiguration", "correct": false},
            {"text": "@WebMvcTest", "correct": false},
            {"text": "@IntegrationTest", "correct": false}
        ]
    },

    {
        "question": "Which annotation in Spring Boot is used to mark a class as a REST controller?",
        "answers": [
            {"text": "@RestController", "correct": true},
            {"text": "@Controller", "correct": false},
            {"text": "@Service", "correct": false},
            {"text": "@Component", "correct": false}
        ]
    },
    {
        "question": "What does @Autowired do in Spring?",
        "answers": [
            {"text": "Automatically injects dependencies", "correct": true},
            {"text": "Registers a class as a bean", "correct": false},
            {"text": "Defines an application property", "correct": false},
            {"text": "Creates a test context", "correct": false}
        ]
    },
    {
        "question": "Which Spring Boot starter helps with database connection pooling?",
        "answers": [
            {"text": "spring-boot-starter-data-jpa", "correct": true},
            {"text": "spring-boot-starter-web", "correct": false},
            {"text": "spring-boot-starter-test", "correct": false},
            {"text": "spring-boot-starter-mail", "correct": false}
        ]
    },
    {
        "question": "Which of the following is used to configure microservices properties centrally?",
        "answers": [
            {"text": "Spring Cloud Config Server", "correct": true},
            {"text": "Spring Data", "correct": false},
            {"text": "Spring MVC", "correct": false},
            {"text": "Spring AOP", "correct": false}
        ]
    },
    {
        "question": "Which testing annotation runs before each test in JUnit 5?",
        "answers": [
            {"text": "@BeforeEach", "correct": true},
            {"text": "@BeforeAll", "correct": false},
            {"text": "@AfterEach", "correct": false},
            {"text": "@AfterAll", "correct": false}
        ]
    },
    {
        "question": "Which design principle does microservices architecture follow?",
        "answers": [
            {"text": "Single Responsibility Principle", "correct": true},
            {"text": "Least Privilege Principle", "correct": false},
            {"text": "Global State Principle", "correct": false},
            {"text": "Open/Closed Principle", "correct": false}
        ]
    },
    {
        "question": "Which tool is commonly used for API documentation in Spring Boot?",
        "answers": [
            {"text": "Swagger / OpenAPI", "correct": true},
            {"text": "Lombok", "correct": false},
            {"text": "JUnit", "correct": false},
            {"text": "Actuator", "correct": false}
        ]
    },
    {
        "question": "Which command builds a Spring Boot JAR file?",
        "answers": [
            {"text": "mvn clean package", "correct": true},
            {"text": "mvn run", "correct": false},
            {"text": "mvn compile-only", "correct": false},
            {"text": "mvn build start", "correct": false}
        ]
    },
    {
        "question": "Which of the following provides load balancing between microservices?",
        "answers": [
            {"text": "Spring Cloud LoadBalancer", "correct": true},
            {"text": "Spring Boot DevTools", "correct": false},
            {"text": "Spring Data REST", "correct": false},
            {"text": "Spring Security", "correct": false}
        ]
    },
    {
        "question": "Which Spring Cloud component handles fault tolerance?",
        "answers": [
            {"text": "Resilience4j", "correct": true},
            {"text": "Ribbon", "correct": false},
            {"text": "Actuator", "correct": false},
            {"text": "Config Server", "correct": false}
        ]
    },
    {
        "question": "What does @MockBean do in Spring Boot tests?",
        "answers": [
            {"text": "Creates a mock of a bean for testing", "correct": true},
            {"text": "Registers a bean globally", "correct": false},
            {"text": "Starts the embedded server", "correct": false},
            {"text": "Configures security context", "correct": false}
        ]
    },
    {
        "question": "What is the use of application.properties or application.yml?",
        "answers": [
            {"text": "To configure application-level settings", "correct": true},
            {"text": "To define test data", "correct": false},
            {"text": "To set up classpath", "correct": false},
            {"text": "To load static assets", "correct": false}
        ]
    },
    {
        "question": "Which microservice pattern handles data consistency across services?",
        "answers": [
            {"text": "Saga Pattern", "correct": true},
            {"text": "Proxy Pattern", "correct": false},
            {"text": "Factory Pattern", "correct": false},
            {"text": "Adapter Pattern", "correct": false}
        ]
    },
    {
        "question": "Which annotation helps map a method to an HTTP GET request?",
        "answers": [
            {"text": "@GetMapping", "correct": true},
            {"text": "@PostMapping", "correct": false},
            {"text": "@PutMapping", "correct": false},
            {"text": "@DeleteMapping", "correct": false}
        ]
    },
    {
        "question": "Which annotation is used to handle exceptions globally in Spring Boot?",
        "answers": [
            {"text": "@ControllerAdvice", "correct": true},
            {"text": "@ExceptionHandler", "correct": false},
            {"text": "@RestController", "correct": false},
            {"text": "@Configuration", "correct": false}
        ]
    },
    {
        "question": "What is the role of Spring Boot Actuator?",
        "answers": [
            {"text": "To monitor and manage the application", "correct": true},
            {"text": "To generate reports", "correct": false},
            {"text": "To manage API routes", "correct": false},
            {"text": "To test endpoints", "correct": false}
        ]
    },
    {
        "question": "Which Spring Boot feature enables automatic configuration based on dependencies?",
        "answers": [
            {"text": "Auto-Configuration", "correct": true},
            {"text": "Manual Configuration", "correct": false},
            {"text": "Code Injection", "correct": false},
            {"text": "ConfigurationProperties", "correct": false}
        ]
    },
    {
        "question": "What does @Value annotation do in Spring Boot?",
        "answers": [
            {"text": "Injects a value from properties file", "correct": true},
            {"text": "Defines a bean name", "correct": false},
            {"text": "Registers a component", "correct": false},
            {"text": "Starts application context", "correct": false}
        ]
    },
    {
        "question": "What is the default logging framework in Spring Boot?",
        "answers": [
            {"text": "Logback", "correct": true},
            {"text": "Log4j2", "correct": false},
            {"text": "SLF4J", "correct": false},
            {"text": "Commons Logging", "correct": false}
        ]
    },
    {
        "question": "Which of the following is used to perform health checks in microservices?",
        "answers": [
            {"text": "Spring Boot Actuator", "correct": true},
            {"text": "Spring Data JPA", "correct": false},
            {"text": "Spring WebFlux", "correct": false},
            {"text": "Spring Security", "correct": false}
        ]
    },

    {
        "question": "Which Spring Boot annotation is used to enable scheduling tasks?",
        "answers": [
            {"text": "@EnableScheduling", "correct": true},
            {"text": "@Scheduled", "correct": false},
            {"text": "@EnableAsync", "correct": false},
            {"text": "@EnableBatchProcessing", "correct": false}
        ]
    },
    {
        "question": "Which tool helps you view Spring Boot app metrics such as uptime and memory usage?",
        "answers": [
            {"text": "Spring Boot Actuator", "correct": true},
            {"text": "Spring Data REST", "correct": false},
            {"text": "Spring Cloud Config", "correct": false},
            {"text": "Lombok", "correct": false}
        ]
    },
    {
        "question": "What does @SpringBootTest annotation do?",
        "answers": [
            {"text": "Loads full application context for integration tests", "correct": true},
            {"text": "Tests only controller layer", "correct": false},
            {"text": "Mocks beans automatically", "correct": false},
            {"text": "Disables auto-configuration", "correct": false}
        ]
    },
    {
        "question": "Which Spring annotation defines a bean lifecycle method to run after initialization?",
        "answers": [
            {"text": "@PostConstruct", "correct": true},
            {"text": "@PreDestroy", "correct": false},
            {"text": "@Autowired", "correct": false},
            {"text": "@Bean", "correct": false}
        ]
    },
    {
        "question": "Which dependency allows for reactive programming in Spring Boot?",
        "answers": [
            {"text": "spring-boot-starter-webflux", "correct": true},
            {"text": "spring-boot-starter-web", "correct": false},
            {"text": "spring-boot-starter-data-jpa", "correct": false},
            {"text": "spring-boot-starter-thymeleaf", "correct": false}
        ]
    },
    {
        "question": "What is used for inter-service communication in microservices?",
        "answers": [
            {"text": "REST or Message Queues", "correct": true},
            {"text": "Servlet Filters", "correct": false},
            {"text": "Static Files", "correct": false},
            {"text": "Spring Profiles", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of a Config Server in microservices?",
        "answers": [
            {"text": "Centralized management of configuration files", "correct": true},
            {"text": "Load balancing requests", "correct": false},
            {"text": "Caching responses", "correct": false},
            {"text": "Running SQL migrations", "correct": false}
        ]
    },
    {
        "question": "Which annotation can be used to mock HTTP requests in Spring tests?",
        "answers": [
            {"text": "@AutoConfigureMockMvc", "correct": true},
            {"text": "@MockBean", "correct": false},
            {"text": "@WebMvcTest", "correct": false},
            {"text": "@RestController", "correct": false}
        ]
    },
    {
        "question": "Which Spring Boot test annotation is used for data layer testing?",
        "answers": [
            {"text": "@DataJpaTest", "correct": true},
            {"text": "@SpringBootTest", "correct": false},
            {"text": "@WebMvcTest", "correct": false},
            {"text": "@JsonTest", "correct": false}
        ]
    },
    {
        "question": "What is the main purpose of Docker in microservices?",
        "answers": [
            {"text": "Containerizing applications for deployment", "correct": true},
            {"text": "Managing application logs", "correct": false},
            {"text": "Writing REST APIs", "correct": false},
            {"text": "Testing JUnit cases", "correct": false}
        ]
    },
    {
        "question": "Which annotation runs a method after each test in JUnit 5?",
        "answers": [
            {"text": "@AfterEach", "correct": true},
            {"text": "@AfterAll", "correct": false},
            {"text": "@BeforeEach", "correct": false},
            {"text": "@BeforeAll", "correct": false}
        ]
    },
    {
        "question": "What does @EnableEurekaClient do?",
        "answers": [
            {"text": "Registers the service with Eureka Server", "correct": true},
            {"text": "Creates a new service registry", "correct": false},
            {"text": "Starts a config server", "correct": false},
            {"text": "Enables security filters", "correct": false}
        ]
    },
    {
        "question": "What is the role of API Gateway in microservices?",
        "answers": [
            {"text": "Routes and filters incoming requests", "correct": true},
            {"text": "Stores application logs", "correct": false},
            {"text": "Executes unit tests", "correct": false},
            {"text": "Performs database migration", "correct": false}
        ]
    },
    {
        "question": "Which Spring Boot test annotation helps test only JSON serialization/deserialization?",
        "answers": [
            {"text": "@JsonTest", "correct": true},
            {"text": "@DataJpaTest", "correct": false},
            {"text": "@SpringBootTest", "correct": false},
            {"text": "@WebMvcTest", "correct": false}
        ]
    },
    {
        "question": "What is used to test REST APIs in Spring Boot?",
        "answers": [
            {"text": "MockMvc", "correct": true},
            {"text": "JdbcTemplate", "correct": false},
            {"text": "RestTemplate", "correct": false},
            {"text": "ApplicationContext", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of @Transactional annotation?",
        "answers": [
            {"text": "Manages transactions automatically", "correct": true},
            {"text": "Sends data over HTTP", "correct": false},
            {"text": "Runs unit tests", "correct": false},
            {"text": "Encrypts data", "correct": false}
        ]
    },
    {
        "question": "Which Spring Boot annotation enables asynchronous method execution?",
        "answers": [
            {"text": "@EnableAsync", "correct": true},
            {"text": "@AsyncMethod", "correct": false},
            {"text": "@EnableScheduling", "correct": false},
            {"text": "@AsyncRun", "correct": false}
        ]
    },
    {
        "question": "Which framework can be used for API documentation in Spring Boot?",
        "answers": [
            {"text": "Swagger", "correct": true},
            {"text": "JUnit", "correct": false},
            {"text": "Mockito", "correct": false},
            {"text": "Lombok", "correct": false}
        ]
    },
    {
        "question": "Which annotation is used to specify test configuration in JUnit?",
        "answers": [
            {"text": "@TestConfiguration", "correct": true},
            {"text": "@Config", "correct": false},
            {"text": "@TestSetup", "correct": false},
            {"text": "@JUnitConfig", "correct": false}
        ]
    },
    {
        "question": "Which command runs tests in a Maven-based Spring Boot project?",
        "answers": [
            {"text": "mvn test", "correct": true},
            {"text": "mvn compile", "correct": false},
            {"text": "mvn install", "correct": false},
            {"text": "mvn verify", "correct": false}
        ]
    },
    {
        "question": "What is the main advantage of microservices architecture?",
        "answers": [
            {"text": "Independent deployment and scalability", "correct": true},
            {"text": "Centralized database access", "correct": false},
            {"text": "Single point of failure", "correct": false},
            {"text": "Shared memory between services", "correct": false}
        ]
    },
    {
        "question": "Which annotation is used to define a custom exception handler?",
        "answers": [
            {"text": "@ExceptionHandler", "correct": true},
            {"text": "@ControllerAdvice", "correct": false},
            {"text": "@ResponseStatus", "correct": false},
            {"text": "@RestController", "correct": false}
        ]
    },
    {
        "question": "Which command starts a Spring Boot app from the terminal?",
        "answers": [
            {"text": "mvn spring-boot:run", "correct": true},
            {"text": "mvn start-app", "correct": false},
            {"text": "mvn run-boot", "correct": false},
            {"text": "mvn execute", "correct": false}
        ]
    },
    {
        "question": "What is the function of Spring Cloud Gateway?",
        "answers": [
            {"text": "To route requests and apply filters in microservices", "correct": true},
            {"text": "To store logs", "correct": false},
            {"text": "To manage user authentication", "correct": false},
            {"text": "To connect to a database", "correct": false}
        ]
    },
    {
        "question": "Which Spring Boot annotation allows binding configuration properties to Java objects?",
        "answers": [
            {"text": "@ConfigurationProperties", "correct": true},
            {"text": "@Value", "correct": false},
            {"text": "@PropertySource", "correct": false},
            {"text": "@Component", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of @EnableConfigServer annotation?",
        "answers": [
            {"text": "Enables a Spring Cloud Config Server", "correct": true},
            {"text": "Starts Eureka client", "correct": false},
            {"text": "Registers an API Gateway", "correct": false},
            {"text": "Runs integration tests", "correct": false}
        ]
    },
    {
        "question": "Which Spring Boot annotation is used to create a JPA repository?",
        "answers": [
            {"text": "@Repository", "correct": true},
            {"text": "@Service", "correct": false},
            {"text": "@Entity", "correct": false},
            {"text": "@Table", "correct": false}
        ]
    },
    {
        "question": "Which of the following enables asynchronous communication between services?",
        "answers": [
            {"text": "Message Queues (RabbitMQ, Kafka)", "correct": true},
            {"text": "REST Controllers", "correct": false},
            {"text": "Feign Clients", "correct": false},
            {"text": "JUnit Tests", "correct": false}
        ]
    },
    {
        "question": "What does @Entity annotation represent in JPA?",
        "answers": [
            {"text": "Marks a class as a persistent entity", "correct": true},
            {"text": "Marks a repository", "correct": false},
            {"text": "Defines a database connection", "correct": false},
            {"text": "Registers a bean", "correct": false}
        ]
    },
    {
        "question": "Which annotation maps a method to handle HTTP POST requests?",
        "answers": [
            {"text": "@PostMapping", "correct": true},
            {"text": "@GetMapping", "correct": false},
            {"text": "@PutMapping", "correct": false},
            {"text": "@DeleteMapping", "correct": false}
        ]
    },
    {
        "question": "Which Spring Boot module helps monitor distributed systems?",
        "answers": [
            {"text": "Spring Cloud Sleuth", "correct": true},
            {"text": "Spring Cloud Config", "correct": false},
            {"text": "Spring Boot DevTools", "correct": false},
            {"text": "Spring Cloud Stream", "correct": false}
        ]
    },
    {
        "question": "Which testing tool allows mocking HTTP requests for Spring Boot REST controllers?",
        "answers": [
            {"text": "MockMvc", "correct": true},
            {"text": "RestTemplate", "correct": false},
            {"text": "TestRestTemplate", "correct": false},
            {"text": "Postman", "correct": false}
        ]
    },
    {
        "question": "Which annotation marks a class as a Spring component for service logic?",
        "answers": [
            {"text": "@Service", "correct": true},
            {"text": "@Component", "correct": false},
            {"text": "@Repository", "correct": false},
            {"text": "@Controller", "correct": false}
        ]
    },
    {
        "question": "Which command creates a Spring Boot project using Spring Initializr CLI?",
        "answers": [
            {"text": "spring init", "correct": true},
            {"text": "spring new", "correct": false},
            {"text": "spring create", "correct": false},
            {"text": "spring generate", "correct": false}
        ]
    },
    {
        "question": "What is the purpose of the @BeforeAll annotation in JUnit 5?",
        "answers": [
            {"text": "Runs setup code before all tests", "correct": true},
            {"text": "Runs setup before each test", "correct": false},
            {"text": "Runs after all tests", "correct": false},
            {"text": "Disables test execution", "correct": false}
        ]
    },
    {
        "question": "What does @SpringBootConfiguration represent?",
        "answers": [
            {"text": "Indicates a configuration class for Spring Boot", "correct": true},
            {"text": "Marks a class as a controller", "correct": false},
            {"text": "Enables bean validation", "correct": false},
            {"text": "Creates REST endpoints", "correct": false}
        ]
    },
    {
        "question": "Which annotation allows mapping of method parameters to path variables?",
        "answers": [
            {"text": "@PathVariable", "correct": true},
            {"text": "@RequestParam", "correct": false},
            {"text": "@ModelAttribute", "correct": false},
            {"text": "@RequestBody", "correct": false}
        ]
    },
    {
        "question": "Which of these is used to define environment-specific settings?",
        "answers": [
            {"text": "Spring Profiles", "correct": true},
            {"text": "Spring Cloud Config", "correct": false},
            {"text": "Spring Beans", "correct": false},
            {"text": "Spring Context", "correct": false}
        ]
    },
    {
        "question": "Which annotation helps map JSON to a Java object in REST APIs?",
        "answers": [
            {"text": "@RequestBody", "correct": true},
            {"text": "@RequestParam", "correct": false},
            {"text": "@ResponseBody", "correct": false},
            {"text": "@PathVariable", "correct": false}
        ]
    },
    {
        "question": "Which of these annotations is used to inject mock dependencies in JUnit tests?",
        "answers": [
            {"text": "@Mock", "correct": true},
            {"text": "@Autowired", "correct": false},
            {"text": "@Bean", "correct": false},
            {"text": "@Test", "correct": false}
        ]
    },
    {
        "question": "Which annotation is used to run integration tests with a full Spring context?",
        "answers": [
            {"text": "@SpringBootTest", "correct": true},
            {"text": "@DataJpaTest", "correct": false},
            {"text": "@WebMvcTest", "correct": false},
            {"text": "@TestConfiguration", "correct": false}
        ]
    },
    {
        "question": "Which of the following statements about Feign Client is true?",
        "answers": [
            {"text": "It simplifies HTTP client calls between microservices", "correct": true},
            {"text": "It replaces Spring Security filters", "correct": false},
            {"text": "It handles message queues", "correct": false},
            {"text": "It manages database connections", "correct": false}
        ]
    },
    {
        "question": "What does the @EnableEurekaClient annotation do?",
        "answers": [
            {"text": "Registers the service with Eureka discovery server", "correct": true},
            {"text": "Starts an API gateway", "correct": false},
            {"text": "Creates a REST controller", "correct": false},
            {"text": "Runs database migrations", "correct": false}
        ]
    },
    {
        "question": "Which Spring Boot annotation enables caching?",
        "answers": [
            {"text": "@EnableCaching", "correct": true},
            {"text": "@Cacheable", "correct": false},
            {"text": "@EnableAsync", "correct": false},
            {"text": "@Configuration", "correct": false}
        ]
    },
    {
        "question": "Which file defines dependencies for a Maven-based Spring Boot project?",
        "answers": [
            {"text": "pom.xml", "correct": true},
            {"text": "application.properties", "correct": false},
            {"text": "settings.gradle", "correct": false},
            {"text": "build.gradle", "correct": false}
        ]
    },
    {
        "question": "What is the default embedded server used by Spring Boot?",
        "answers": [
            {"text": "Tomcat", "correct": true},
            {"text": "Jetty", "correct": false},
            {"text": "Undertow", "correct": false},
            {"text": "WildFly", "correct": false}
        ]
    },
    {
        "question": "Which Spring Boot starter is used for building RESTful web services?",
        "answers": [
            {"text": "spring-boot-starter-web", "correct": true},
            {"text": "spring-boot-starter-data-jpa", "correct": false},
            {"text": "spring-boot-starter-security", "correct": false},
            {"text": "spring-boot-starter-test", "correct": false}
        ]
    },
    {
        "question": "Which dependency helps test repositories using in-memory databases?",
        "answers": [
            {"text": "@DataJpaTest", "correct": true},
            {"text": "@SpringBootTest", "correct": false},
            {"text": "@TestConfiguration", "correct": false},
            {"text": "@MockBean", "correct": false}
        ]
    },
    {
        "question": "What is the function of Spring Cloud Config Server?",
        "answers": [
            {"text": "Manages external configuration for microservices", "correct": true},
            {"text": "Provides security authentication", "correct": false},
            {"text": "Manages REST endpoints", "correct": false},
            {"text": "Handles file uploads", "correct": false}
        ]
    },
    {
        "question": "Which annotation is used to schedule tasks in Spring Boot?",
        "answers": [
            {"text": "@Scheduled", "correct": true},
            {"text": "@Async", "correct": false},
            {"text": "@Cacheable", "correct": false},
            {"text": "@Transactional", "correct": false}
        ]
    },
    {
        "question": "Which HTTP client is recommended in Spring Boot for making REST calls?",
        "answers": [
            {"text": "WebClient", "correct": true},
            {"text": "RestTemplate", "correct": false},
            {"text": "HttpClient", "correct": false},
            {"text": "URLConnection", "correct": false}
        ]
    },
    {
        "question": "Which of the following annotations injects a Spring bean automatically?",
        "answers": [
            {"text": "@Autowired", "correct": true},
            {"text": "@InjectBean", "correct": false},
            {"text": "@Configuration", "correct": false},
            {"text": "@EnableAutoConfig", "correct": false}
        ]
    },
    {
        "question": "Which annotation is used to run code after all test cases are completed in JUnit 5?",
        "answers": [
            {"text": "@AfterAll", "correct": true},
            {"text": "@AfterEach", "correct": false},
            {"text": "@BeforeAll", "correct": false},
            {"text": "@BeforeEach", "correct": false}
        ]
    },
    {
        "question": "Which of these is a reactive web framework in Spring Boot?",
        "answers": [
            {"text": "Spring WebFlux", "correct": true},
            {"text": "Spring MVC", "correct": false},
            {"text": "Spring JDBC", "correct": false},
            {"text": "Spring ORM", "correct": false}
        ]
    },
    {
        "question": "Which of the following is true about Docker in microservices?",
        "answers": [
            {"text": "It allows packaging each service in an isolated container", "correct": true},
            {"text": "It replaces Java classes", "correct": false},
            {"text": "It merges microservices into one", "correct": false},
            {"text": "It provides load balancing by default", "correct": false}
        ]
    },
    {
        "question": "Which Spring Boot annotation is used for transaction management?",
        "answers": [
            {"text": "@Transactional", "correct": true},
            {"text": "@Repository", "correct": false},
            {"text": "@Service", "correct": false},
            {"text": "@EnableTransaction", "correct": false}
        ]
    },
    {
        "question": "Which tool can be used for API documentation in Spring Boot?",
        "answers": [
            {"text": "Swagger / OpenAPI", "correct": true},
            {"text": "Maven", "correct": false},
            {"text": "JUnit", "correct": false},
            {"text": "Git", "correct": false}
        ]
    },
    {
        "question": "Which annotation is used to test only the web layer of a Spring Boot app?",
        "answers": [
            {"text": "@WebMvcTest", "correct": true},
            {"text": "@DataJpaTest", "correct": false},
            {"text": "@SpringBootTest", "correct": false},
            {"text": "@RestControllerTest", "correct": false}
        ]
    },
    {
        "question": "What is the role of a service registry in microservices architecture?",
        "answers": [
            {"text": "Keeps track of available services and their instances", "correct": true},
            {"text": "Stores user data", "correct": false},
            {"text": "Provides caching support", "correct": false},
            {"text": "Manages API keys", "correct": false}
        ]
    },
    {
        "question": "Which of the following is true about Circuit Breaker in microservices?",
        "answers": [
            {"text": "It prevents cascading failures between services", "correct": true},
            {"text": "It caches all responses", "correct": false},
            {"text": "It encrypts network communication", "correct": false},
            {"text": "It monitors database schema", "correct": false}
        ]
    }

];

export default questions;
