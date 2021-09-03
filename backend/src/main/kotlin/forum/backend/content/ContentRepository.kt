package forum.backend.content

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query

interface ContentRepository : JpaRepository<Content, Int> {

    @Query("SELECT content, written_by from forum.content " +
            "where content.topic_id=" +
                "(SELECT id from forum.topic where title=?1)"
                , nativeQuery = true)
    fun findContent(topic: String): Iterable<String>

    @Query("SELECT COUNT(*) from forum.topic", nativeQuery = true)
    fun findNoRowOfTopic(): Int

}