package lk.CarRent.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Payment {
    @Id
    private String paymentId;
    private String bookingId;
    private double rentFee;
    private double lossPayment;
    private int extraKm;
    private double extraKmPrice;
    private double driverFee;
    private double fullPayment;
    private Date paymentDate;
}
