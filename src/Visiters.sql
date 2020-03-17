-- Author : Teboho Romeo Lekhalo
Create Table visitors
(
    ID serial primary key,
    Visitor_Name varchar(100),
    Visitor_Age integer,
    Date_Of_Visit date,
    Time_Of_Visit time,
    Assistant_Name varchar(100),
    Comments VARCHAR(225)
);

-- Done with this one.