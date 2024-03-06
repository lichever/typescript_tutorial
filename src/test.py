import heapq
from heapq import heappop
 
 
class Pair:
    def __init__(self, x, y):
        self.x = x
        self.y = y
 
    # 覆盖小于运算符 __lt__ 以使 Pair 类与最大堆一起工作
    def __lt__(self, other):
        if self.x == other.x: return self.y < other.y
        return self.x > other.x
 
    def __repr__(self):
        return f'({self.x}, {self.y})'
 
 
if __name__ == '__main__':
 
    # 构建 Pair 的最大堆
    pq = [Pair(7, 10), Pair(7, 3), Pair(7, 4), Pair(4, 1), Pair(6, 2), Pair(1, 5)]
    heapq.heapify(pq)
 
    # 运行直到最大堆为空
    while pq:
        # 打印堆中的下一个最大元素
        print(heappop(pq))
    
    print('---' * 10)
    pq2 = [(7, 0), (7, 3), (7, 4), (4, 1), (6, 2), (1, 5)]
    heapq.heapify(pq2)
    while pq2:
        print(heappop(pq2)) 