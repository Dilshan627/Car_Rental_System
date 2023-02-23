package lk.CarRent.repo;

import lk.CarRent.entity.Reserve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReserveRepo extends JpaRepository<Reserve, String> {
    @Query(value = "select * from reserve where status=false", nativeQuery = true)
    List<Reserve> getPendingReserve();

    @Query(value = "UPDATE reserve SET status = true WHERE bookingId = B-3510", nativeQuery = true)
    void appruvalReserve();
}
