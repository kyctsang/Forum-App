package forum.backend.category

import javax.persistence.Entity
import javax.persistence.Id


@Entity
class Category {
    @Id
    val category: String? = null
}