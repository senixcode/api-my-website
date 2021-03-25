import { TopicsService } from './topics.service';
import { Topic } from './entities/topic.entity';
import { CreateTopicInput } from './dto/create-topic.input';
import { UpdateTopicInput } from './dto/update-topic.input';
export declare class TopicsResolver {
    private readonly topicsService;
    constructor(topicsService: TopicsService);
    createTopic(createTopicInput: CreateTopicInput): Promise<Topic>;
    findAll(): Promise<Topic[]>;
    findOne(id: number): Promise<Topic>;
    updateTopic(updateTopicInput: UpdateTopicInput): Promise<UpdateTopicInput & Topic>;
    removeTopic(id: number): Promise<Topic>;
}
