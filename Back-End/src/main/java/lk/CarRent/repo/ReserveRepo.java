package lk.CarRent.repo;

import lk.CarRent.entity.Reserve;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReserveRepo extends JpaRepository<Reserve, String> {
}
