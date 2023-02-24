package lk.CarRent.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Date;
import java.sql.Time;


@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Reserve {
    @Id
    private String bookingId;
    private String customerName;
    private String customerContact;
    private String customerNic;
    private String carNumber;
    private Date pickupDate;
    private Time pickupTime;
    private Date returnDate;
    private Time returnTime;
    private String driverName;
    private String driverContact;
    @Column(name = "status", columnDefinition = "BIT default 0")
    private boolean status;

}
