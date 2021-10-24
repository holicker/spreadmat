FROM openjdk:8u302-jdk

EXPOSE 9999

ADD ./build/libs/*.jar app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]