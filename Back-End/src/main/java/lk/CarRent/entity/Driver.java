package lk.CarRent.entity;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;
    private String driverName;
    private String driverAddress;
    private String driverAge;
    private String driverContact;
    private String driverPassword;
    @Column(name = "status", columnDefinition = "BIT default 0")
    private boolean status;
}
