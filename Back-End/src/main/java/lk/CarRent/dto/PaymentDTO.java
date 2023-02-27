package lk.CarRent.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class PaymentDTO {
    private String paymentId;
    private String bookingId;
    private double rentFee;
    private double lossPayment;
    private int extraKm;
    private double extraKmPrice;
    private double driverFee;
    private double fullPayment;
    private String paymentDate;
}
