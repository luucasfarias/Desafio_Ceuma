CREATE TABLE student (
        id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        cpf VARCHAR(15) NOT NULL,
        email VARCHAR(100),
        phone VARCHAR(30),
        public_place VARCHAR(40),
        house_number VARCHAR(30),
        complement VARCHAR(50),
        neighborhood VARCHAR(40),
        cep VARCHAR(30),
        city VARCHAR(30),
        state VARCHAR(30),
        id_course BIGINT(20) NOT NULL,
        FOREIGN KEY (id_course) REFERENCES course(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

