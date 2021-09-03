package forum.backend.topic

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query

interface TopicRepository : JpaRepository<Topic, Int> {

    @Query("SELECT * from topic where topic.category regexp ?1", nativeQuery = true)
    fun findTitleByCategory(category: String): List<Topic>
}