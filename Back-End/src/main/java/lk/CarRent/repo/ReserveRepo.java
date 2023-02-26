package lk.CarRent.repo;

import lk.CarRent.entity.Reserve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReserveRepo extends JpaRepository<Reserve, String> {
    @Query(value = "select * from reserve where status=false", nativeQuery = true)
    List<Reserve> getPendingReserve();

    @Query(value = "select * from reserve where status=true", nativeQuery = true)
    List<Reserve> getAppruvalReserve();

    @Query(value = "UPDATE reserve SET status = true WHERE bookingId =:id", nativeQuery = true)
    void appruvalReserve(@Param("id")String id);

}
