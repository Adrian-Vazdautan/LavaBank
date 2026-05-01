# Берем образ с Java 17 (или какая у тебя в проекте)
FROM eclipse-temurin:25-jdk-alpine

# Копируем скомпилированный jar-файл в контейнер
COPY target/LavaBank-0.0.1-SNAPSHOT.jar app.jar

# Запускаем приложение
ENTRYPOINT ["java", "-jar", "/app.jar"]