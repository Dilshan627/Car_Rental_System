package lk.CarRent.repo;

import lk.CarRent.entity.Reserve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReserveRepo extends JpaRepository<Reserve, String> {
    @Query(value = "select * from reserve where status=false", nativeQuery = true)
    List<Reserve> getPendingReserve();

    @Query(value = "select * from reserve where status=true", nativeQuery = true)
    List<Reserve> getAppruvalReserve();

    List<Reserve> findByDriverName(String name);

    @Query(value = " select count(*) from reserve where status=false", nativeQuery = true)
    String countByReserve ();

    @Query(value = " select count(*) from reserve where status=true", nativeQuery = true)
    String countByActiveBooking ();

    @Query(value = "SELECT * FROM reserve WHERE status=true AND fullpayment=false", nativeQuery = true)
    List<Reserve> getPaymentId();
}
