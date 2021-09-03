CREATE TABLE IF NOT EXISTS `forum`.`member`(
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255)
) ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS `forum`.`category`(
    category VARCHAR(255) PRIMARY KEY
) ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS `forum`.`topic`(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    author VARCHAR(255) NOT NULL,
    FOREIGN KEY (author) REFERENCES `forum`.`member`(username) ON DELETE CASCADE,
    FOREIGN KEY (category) REFERENCES `forum`.`category`(category) on DELETE CASCADE
) ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS `forum`.`content`(
    id INT AUTO_INCREMENT PRIMARY KEY,
    topic_id INT NOT NULL,
    content VARCHAR(255) NOT NULL,
    written_by VARCHAR(255) NOT NULL,
    FOREIGN KEY (topic_id) REFERENCES `forum`.`topic`(id) ON DELETE CASCADE,
    FOREIGN KEY (written_by) REFERENCES `forum`.`member`(username) ON DELETE CASCADE
) ENGINE = INNODB;

ALTER TABLE `forum`.`topic` AUTO_INCREMENT = 1;
ALTER TABLE `forum`.`content` AUTO_INCREMENT = 1;


INSERT INTO `forum`.`member`
 VALUES ("admin", MD5('Pass1234')),
         ("guest", MD5(''));

INSERT INTO `forum`.`category`
 VALUES  ("All"),
         ("Trial"),
         ("Health"),
         ("Food"),
         ("Sports"),
         ("Career"),
         ("Beauty");

INSERT INTO `forum`.`topic` (title, category, author)
 VALUES ("First topic opened by admin", "Trial", "admin"),
         ("How to cook the best CHICKEN BREAST", "Food", "admin"),
         ("Most important nutrients for human body", "Health", "admin"),
         ("First topic opened by Guest", "Trial", "guest"),
         ("Steps to become a good footballer", "Sports", "admin"),
         ("The LEGEND: Kobe Bryant", "Sports", "guest"),
         ("Must learn of full stack developer", "Career", "admin"),
         ("How to Avoid Maskne (Mask Acne) Breakouts", "Beauty", "admin"),
         ("Blue light protection sales boom as WFH normalises", "Beauty", "admin");

INSERT INTO `forum`.`content` (topic_id, content, written_by)
 VALUES  (1, "First comment in forum", "admin"),
         (1, "This comment is written by admin", "admin"),
         (2, "Pat the chicken dry and season with salt and pepper.", "admin"),
         (2, "Thoroughly dry the chicken on all sides with paper towels.", "admin"),
         (2, "Season with the salt and pepper on all sides.", "admin"),
         (2, "Heat the oil over medium-high heat in a large skillet.", "admin"),
         (2, "Heat the oil in a 10-inch or larger skillet, preferably straight-sided and not nonstick (cast iron is a great option), over medium-high heat until shimmering, about 3 minutes.", "admin"),
         (2, "Carefully add the chicken to the hot pan and cook for 5 to 7 minutes.", "admin"),
         (2, "Swirl the pan just before adding the breasts to evenly distribute the oil.", "guest"),
         (2, "Add the chicken one at a time and do not touch, poke, or move the chicken for 5 to 7 minutes.", "admin"),
         (2, "If you try to turn the chicken and it feels stuck, it isn't golden and crispy or ready to flip.", "guest"),
         (2, "Flip the chicken and cook until it reaches 165°F, 5 to 7 minutes more.", "guest"),
         (2, "Flip the breasts over and add the butter or ghee right between them.", "admin"),
         (2, "Pick up the pan and give it a gentle swirl to distribute the melting butter.", "admin"),
         (2, "Cook until they reach an internal temperature of 165°F, 5 to 7 minutes more.", "guest"),
         (2, "Slice and serve.", "admin"),
         (2, "Remove the chicken breasts to a plate or clean cutting board.", "admin"),
         (2, "Let rest for 3 minutes before slicing and serving.", "admin"),
         (2, "RECIPE NOTES", "guest"),
         (2, "Storage: Leftovers can be stored in an airtight container in the refrigerator for up to 4 days.", "guest"),
         (2, "REFERENCE:", "admin"),
         (2, "Meghan Splawn (FOOD EDITOR, SKILLS)", "admin"),
         (2, "link: https://www.thekitchn.com/how-to-cook-golden-juicy-chicken-breast-on-the-stove-248171", "admin"),
         (3, "Vitamins", "admin"),
         (3, "Minerals", "guest"),
         (3, "Protein", "guest"),
         (3, "Fats", "guest"),
         (3, "Carbohydrates", "guest"),
         (3, "Water", "guest"),
         (4, "First Comment in the topic opened by guest", "guest"),
         (4, "I am Ironman", "admin"),
         (5, "Practice controlling the ball", "admin"),
         (5, "Keep on top of your fitness", "admin"),
         (5, "Train regularly", "admin"),
         (5, "Take feedback on-board", "admin"),
         (5, "Get personal Goal", "admin"),
         (5, "Go to football camp", "admin"),
         (6, "Kobe Bryant is a LEGEND", "admin"),
         (7, "Front-end: HTML, CSS, JS, BootStrap, ReactJS, React Native", "admin"),
         (7, "Back-end: Django, Spring Boot, NodeJS, Python, JAVA", "admin"),
         (7, "Database: MySQL, MongoDB, PostGres, SQLite", "admin"),
         (8, "Wash your face regularly", "guest"),
         (8, "Use a gentle cleanser", "guest"),
         (8, "Use a noncomedogenic moisturizer", "guest"),
         (8, "Apply cortisone cream and moisturizer with ceramides", "guest"),
         (8, "Take a break from makeup", "guest"),
         (8, "Choose the right mask", "guest"),
         (8, "Wash your face after wearing a mask", "guest"),
         (8, "REFERENCES:", "guest"),
         (8, "Author: unknown, November 24, 2020", "guest"),
         (8, "Link: https://www.healthline.com/health/maskne", "guest"),
         (9, "With working from home increasingly becoming the norm, it seems people’s screen time has dramatically skyrocketed, resulting in the surge in sales of blue light protection beauty products.", "guest"),
         (9, "Blue light emissions, which come out of electronic devices such as smartphones and computer screens,", "guest"),
         (9, "are said to be able to penetrate the skin and the retina,", "guest"),
         (9, "according to research by the Journal of Biomedical Physics and Engineering.", "guest"),
         (9, "The study found that consistent exposure to this light can damage the retina,", "guest"),
         (9, "in addition to triggering oxidative stress on skin that can lead to premature ageing.", "admin"),
         (9, "And while beauty products containing technologies such as those with blue light defences have exploded onto the market in recent years, they are now picking up more than ever as consumer demand increases during self-isolation.", "admin"),
         (9, "According to the NPD Group, blue light protective skincare sales increased by 170% in the first half of 2020, and makeup with blue light protection also saw a 179% increase for the same time period.", "admin"),
         (9, "REFERENCES:", "guest"),
         (9, "Author: Tiarne Blackwell, September 14, 2020 - 10:50am", "guest"),
         (9, "Link: https://www.beautydirectory.com.au/news/beauty/blue-light-protection-sales-boom-as-wfh-normalises", "guest");


