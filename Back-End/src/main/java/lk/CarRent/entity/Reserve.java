package lk.CarRent.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;


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
    private String pickupDate;
    private String pickupTime;
    private String returnDate;
    private String returnTime;
    private String driverName;
    private String driverContact;
    private String payment;
    @Column(name = "status", columnDefinition = "BIT default 0")
    private boolean status;
    @Column(name = "fullPayment", columnDefinition = "BIT default 0")
    private boolean fullPayment;

}
