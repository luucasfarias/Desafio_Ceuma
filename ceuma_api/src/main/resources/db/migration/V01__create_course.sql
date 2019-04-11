CREATE TABLE course(
        id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        date_register DATE NOT NULL,
        workload VARCHAR(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


