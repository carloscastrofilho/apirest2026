


CREATE TABLE municipios (
	id INT NOT NULL AUTO_INCREMENT,
    municipio VARCHAR(100),
    UF VARCHAR(2),
    CONSTRAINT PK_MUNICIPIOS_ID PRIMARY KEY (id)
);

INSERT INTO municipios ( municipio , UF ) VALUES 
( 'Taquaritinga','SP' ),
( 'Matão','SP' ),
( 'Rio de Janeiro','RJ' );

CREATE TABLE estados (
    id INT NOT NULL AUTO_INCREMENT,
    estado VARCHAR(100),
    uf VARCHAR(2),
    CONSTRAINT PK_ESTADOS_ID PRIMARY KEY(id)
);

INSERT INTO estados ( estado, uf ) VALUES 
('São Paulo','SP'),
('Rio de Janeiro','RJ'),
('Minas Gerais','MG');
