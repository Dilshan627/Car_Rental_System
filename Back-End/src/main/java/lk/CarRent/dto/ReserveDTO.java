package lk.CarRent.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.sql.Date;
import java.sql.Time;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class ReserveDTO {
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
    private boolean status;
}
